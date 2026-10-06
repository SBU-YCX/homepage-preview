(() => {
  const memory = { photo: null, entered: false };
  let cleanup = () => {};
  const read = key => { try { return sessionStorage.getItem(`yx-${key}`); } catch { return null; } };
  const write = (key, value) => { try { sessionStorage.setItem(`yx-${key}`, value); } catch {} };
  const asset = url => window.homepagePreviewAsset ? window.homepagePreviewAsset(url) : url;
  const navigate = (url, replace = false) => {
    if (window.homepagePreviewNavigate) window.homepagePreviewNavigate(url, replace);
    else if (replace) location.replace(url);
    else location.assign(url);
  };
  function init() {
    cleanup();
    const configElement = document.getElementById('site-photo-config');
    if (!configElement) return;
    const config = JSON.parse(configElement.textContent);
    const photos = config.photos;
    const current = photos.find(p => p.id === (memory.photo || read('photo'))) || photos[0];
    const controller = new AbortController();
    let interval;
    cleanup = () => { controller.abort(); clearInterval(interval); };
    const listen = (node, event, action) => node?.addEventListener(event, action, { signal: controller.signal });
    const setPosition = (image, photo) => {
      image.style.setProperty('--photo-position', photo.position);
      image.style.setProperty('--photo-mobile-position', photo.mobilePosition);
    };
    const backdrop = document.getElementById('site-background-photo');
    if (backdrop) {
      backdrop.src = asset(current.url);
      setPosition(backdrop, current);
    }
    if (document.body.dataset.page !== 'welcome') return;
    const route = new URL(window.homepagePreviewRoute || location.href, location.href);
    if ((memory.entered || read('entered') === '1') && route.searchParams.get('welcome') !== '1') {
      navigate(config.home, true);
      return;
    }
    let index = photos.indexOf(current);
    let active = 0;
    let request = 0;
    const layers = [document.getElementById('welcome-photo-a'), document.getElementById('welcome-photo-b')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let paused = reduceMotion.matches;
    const pauseButton = document.getElementById('photo-pause');
    const updateLabels = () => {
      document.getElementById('photo-caption').textContent = photos[index].label;
      document.getElementById('photo-counter').textContent = `${String(index + 1).padStart(2, '0')} / ${String(photos.length).padStart(2, '0')}`;
      pauseButton.textContent = paused ? 'Play' : 'Pause';
      pauseButton.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    };
    layers[0].src = asset(current.url);
    setPosition(layers[0], current);
    updateLabels();
    const show = async nextIndex => {
      const token = ++request;
      const next = (nextIndex + photos.length) % photos.length;
      const photo = photos[next];
      const url = asset(photo.url);
      const loaded = new Image();
      loaded.src = url;
      try { await loaded.decode(); } catch { return; }
      if (controller.signal.aborted || token !== request) return;
      const nextLayer = 1 - active;
      layers[nextLayer].src = url;
      setPosition(layers[nextLayer], photo);
      layers[nextLayer].classList.add('is-active');
      layers[active].classList.remove('is-active');
      active = nextLayer;
      index = next;
      updateLabels();
    };
    listen(document.getElementById('photo-next'), 'click', () => { paused = true; updateLabels(); show(index + 1); });
    listen(document.getElementById('photo-prev'), 'click', () => { paused = true; updateLabels(); show(index - 1); });
    listen(pauseButton, 'click', () => { paused = !paused; updateLabels(); });
    listen(reduceMotion, 'change', event => { if (event.matches) { paused = true; updateLabels(); } });
    listen(document.getElementById('enter-home'), 'click', event => {
      event.preventDefault();
      memory.photo = photos[index].id;
      memory.entered = true;
      write('photo', memory.photo);
      write('entered', '1');
      navigate(config.home);
    });
    interval = setInterval(() => {
      if (!paused && !document.hidden) show(index + 1);
    }, config.slideshowInterval);
  }
  window.initHomepage = init;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
