export type Publication = {
  id: string; name: string; title: string; authors: string[]; venue: string; year: number;
  image?: string; description?: string; paper: string; code?: string; poster?: string;
  citation?: string; bibtex?: string; preprint?: boolean;
};

export const publications: Publication[] = [
  {
    id: 'puppet-cnn', name: 'Puppet-CNN',
    title: 'Continuous Parameter Dynamics for Input-Adaptive Convolutional Networks',
    authors: ['Yucheng Xing', 'Xin Wang'], venue: 'ECCV 2026', year: 2026,
    image: 'puppet-cnn.png',
    description: 'Continuous parameter dynamics for compact convolutional networks with input-adaptive computation.',
    paper: 'https://link.springer.com/chapter/10.1007/978-3-032-37556-8_31',
    poster: 'https://drive.google.com/file/d/1ZaLAuHhjRIm_JD6oUzaM3spliccsg0Dw/view',
    bibtex: '@inproceedings{xing2026puppet,\n  title={Puppet-CNN: Continuous Parameter Dynamics for Input-Adaptive Convolutional Networks},\n  author={Xing, Yucheng and Wang, Xin},\n  booktitle={Computer Vision -- ECCV 2026},\n  year={2026},\n  pages={570--587},\n  doi={10.1007/978-3-032-37556-8_31}\n}',
  },
  {
    id: 'infinity-net', name: '∞-Net', title: 'An Unsupervised Model for Online Graph Time-Series Denoising',
    authors: ['Yucheng Xing', 'Xin Wang'], venue: 'ICONIP 2024', year: 2024,
    image: 'infinity-net.png', description: 'Online denoising of graph time series without clean training targets.',
    paper: 'https://link.springer.com/chapter/10.1007/978-981-96-6582-2_8',
    code: 'https://github.com/SBU-YCX/Infinity-Net',
    poster: 'https://drive.google.com/file/d/1amPXWbo6oL84sW6PMXFvpvstubd5sHu8/view',
    citation: 'https://link.springer.com/chapter/10.1007/978-981-96-6582-2_8#citeas',
  },
  {
    id: 'evolved-differential', name: 'Evolved Differential Model', title: 'for Sporadic Graph Time-Series Prediction',
    authors: ['Yucheng Xing', 'Jacqueline Wu', 'Yingru Liu', 'Xuewen Yang', 'Xin Wang'],
    venue: 'Intelligent and Converged Networks', year: 2024,
    paper: 'https://ieeexplore.ieee.org/document/10706763',
  },
  {
    id: 'hdg-ode', name: 'HDG-ODE', title: 'A Hierarchical Continuous-Time Model for Human Pose Forecasting',
    authors: ['Yucheng Xing', 'Xin Wang'], venue: 'ICCV 2023', year: 2023,
    image: 'hdg-ode.png', description: 'Modeling human motion through hierarchical graph dynamics in continuous time.',
    paper: 'https://openaccess.thecvf.com/content/ICCV2023/html/Xing_HDG-ODE_A_Hierarchical_Continuous-Time_Model_for_Human_Pose_Forecasting_ICCV_2023_paper.html',
    code: 'https://github.com/SBU-YCX/HDG-ODE',
    poster: 'https://drive.google.com/file/d/1HpjivRwq_OyM8nLTWAn_JKgdarQ3sPnU/view',
    bibtex: '@inproceedings{xing2023hdg,\n  title={HDG-ODE: A Hierarchical Continuous-Time Model for Human Pose Forecasting},\n  author={Xing, Yucheng and Wang, Xin},\n  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},\n  year={2023}\n}',
  },
  {
    id: 'aggdn', name: 'AGGDN', title: 'A Continuous Stochastic Predictive Model for Monitoring Sporadic Time Series on Graphs',
    authors: ['Yucheng Xing', 'Jacqueline Wu', 'Yingru Liu', 'Xuewen Yang', 'Xin Wang'],
    venue: 'ICONIP 2023', year: 2023, image: 'aggdn.png',
    description: 'Continuous stochastic modeling for irregular observations on graphs.',
    paper: 'https://link.springer.com/chapter/10.1007/978-981-99-8079-6_11',
    code: 'https://github.com/SBU-YCX/AGGDN',
    poster: 'https://drive.google.com/file/d/1C59e3zZ5RO0grj_YElZAxjZeCRXOdrvr/view',
    citation: 'https://link.springer.com/chapter/10.1007/978-981-99-8079-6_11#citeas',
  },
  {
    id: 'stochastic-networks', name: 'Continuous-Time Stochastic Differential Networks', title: 'for Sporadic Time Series Modeling',
    authors: ['Yingru Liu', 'Yucheng Xing', 'Xuewen Yang', 'Xin Wang', 'Jing Shi', 'Di Jin', 'Zhaoyue Chen', 'Jacqueline Wu'],
    venue: 'ICONIP 2021', year: 2021,
    paper: 'https://link.springer.com/chapter/10.1007/978-3-030-92307-5_40',
    citation: 'https://link.springer.com/chapter/10.1007/978-3-030-92307-5_40#citeas',
  },
  {
    id: 'multi-person-pose', name: 'Multi-person 3D Pose Estimation', title: 'from Monocular Image Sequences',
    authors: ['Ran Li', 'Nayun Xu', 'Xutong Lu', 'Yucheng Xing', 'Haohua Zhao', 'Li Niu', 'Liqing Zhang'],
    venue: 'ICONIP 2019', year: 2019, image: 'multi-person-pose.png',
    paper: 'https://link.springer.com/chapter/10.1007/978-3-030-36711-4_2',
    citation: 'https://link.springer.com/chapter/10.1007/978-3-030-36711-4_2#citeas',
  },
  {
    id: 'ai-grid', name: 'AI-Grid', title: 'AI-Enabled, Smart Programmable Microgrids',
    authors: ['Peng Zhang', 'Yifan Zhou', 'Scott A. Smolka', 'Scott D. Stoller', 'Xin Wang', 'Rong Zhao', 'Tianyun Ling', 'Yucheng Xing', 'Shouvik Roy', 'Amol Damare'],
    venue: 'Microgrids: Theory and Practice', year: 2024,
    paper: 'https://onlinelibrary.wiley.com/doi/10.1002/9781119890881.ch2',
    citation: 'https://onlinelibrary.wiley.com/action/showCitFormats?doi=10.1002%2F9781119890881.ch2',
  },
];

export const preprints: Publication[] = [
  { id: 'spectral-diffusion', name: 'Spectral-Structured Diffusion', title: 'for Single-Image Rain Removal',
    authors: ['Yucheng Xing', 'Xin Wang'], venue: 'arXiv · 2026', year: 2026,
    paper: 'https://arxiv.org/abs/2603.09054', preprint: true },
  { id: 'ntree-diffusion', name: 'N-Tree Diffusion', title: 'for Long-Horizon Wildfire Risk Forecasting',
    authors: ['Yucheng Xing', 'Xin Wang'], venue: 'arXiv · 2026', year: 2026,
    paper: 'https://arxiv.org/abs/2603.07361', preprint: true },
  { id: 'dancer', name: 'DANCER:', title: 'Dance ANimation via Condition Enhancement and Rendering with diffusion model',
    authors: ['Yucheng Xing*', 'Jinxing Yin*', 'Xiaodong Liu*', 'Xin Wang'], venue: 'arXiv · 2025 · * Equal contribution', year: 2025,
    paper: 'https://arxiv.org/abs/2510.27169', preprint: true },
  { id: 'ac-diff', name: 'Input-Adaptive Generative Dynamics', title: 'in Diffusion Models',
    authors: ['Yucheng Xing', 'Xiaodong Liu', 'Xin Wang'], venue: 'arXiv · 2024', year: 2024,
    description: 'Adaptive control of the diffusion process for efficient conditional generation.',
    paper: 'https://arxiv.org/abs/2411.15199', preprint: true },
  { id: 'mftp', name: 'Map-Free Trajectory Prediction', title: 'with Map Distillation and Hierarchical Encoding',
    authors: ['Xiaodong Liu', 'Yucheng Xing', 'Xin Wang'], venue: 'arXiv · 2024', year: 2024,
    paper: 'https://arxiv.org/abs/2411.10961', preprint: true },
];

export const selected = ['puppet-cnn', 'hdg-ode', 'infinity-net'].map(id => publications.find(p => p.id===id)!);
