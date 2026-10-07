// 论文内容在这里维护；不要编辑 dist/publications/index.html（构建时会覆盖）。
// 每个 { ... } 是一篇论文，页面会按 year 自动分组。
// name / title：论文名称；authors：作者；venue / year：发表信息。
// paper：标题和 Paper / arXiv 按钮目前共用的地址。
// code / poster：可选资源链接；bibtex：页面内展开的引用；citation：外部引用页。
// selected 在文件末尾，控制首页的 Selected research。

export type Publication = {
  id: string;
  name: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  image?: string;
  description?: string;
  paper: string;
  code?: string;
  poster?: string;
  citation?: string;
  bibtex?: string;
  preprint?: boolean;
  publicationUrl?: string;
};

export const publications: Publication[] = [
  {
    id: 'puppet-cnn',
    name: 'Puppet-CNN',
    title: 'Continuous Parameter Dynamics for Input-Adaptive Convolutional Networks',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-3-032-37556-8_31', 
    authors: ['Yucheng Xing', 'Xin Wang'],
    venue: 'ECCV 2026',
    year: 2026,
    description: '[Acceptance Rate: 27.53%]', 
    image: 'puppet-cnn.png',
    paper: 'https://drive.google.com/file/d/1jg9L6P6L6sWORdaZQ2WfVojQDaW64Swm/view',
    poster: 'https://drive.google.com/file/d/1ZaLAuHhjRIm_JD6oUzaM3spliccsg0Dw/view',
    bibtex: `@inproceedings{xing2026puppet,
  title={Puppet-CNN: Continuous Parameter Dynamics for Input-Adaptive Convolutional Networks},
  author={Xing, Yucheng and Wang, Xin},
  booktitle={European Conference on Computer Vision},
  pages={570--587},
  year={2026},
  organization={Springer}
}`,
  },

  {
    id: 'infinity-net',
    name: '∞-Net',
    title: 'An Unsupervised Model for Online Graph Time-Series Denoising',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-981-96-6582-2_8', 
    authors: ['Yucheng Xing', 'Xin Wang'],
    venue: 'ICONIP 2024',
    year: 2024,
    image: 'infinity-net.png',
    paper: 'https://drive.google.com/file/d/17LskJVcTY5JOTEW_XhDTnFix2oUO3bTc/view',
    code: 'https://github.com/SBU-YCX/Infinity-Net',
    poster: 'https://drive.google.com/file/d/1amPXWbo6oL84sW6PMXFvpvstubd5sHu8/view',
    bibtex: `@inproceedings{xing2024net,
  title={∞-Net: An Unsupervised Model for Online Graph Time-Series Denoising},
  author={Xing, Yucheng and Wang, Xin},
  booktitle={International Conference on Neural Information Processing},
  pages={111--125},
  year={2024},
  organization={Springer}
}`,
  },

  {
    id: 'evolved-differential',
    name: 'Evolved Differential Model',
    title: 'for Sporadic Graph Time-Series Prediction',
    publicationUrl: 'https://ieeexplore.ieee.org/abstract/document/10706763', 
    authors: ['Yucheng Xing', 'Jacqueline Wu', 'Yingru Liu', 'Xuewen Yang', 'Xin Wang'],
    venue: 'Intelligent and Converged Networks',
    year: 2024,
    paper: 'https://drive.google.com/file/d/1oox-MUhPh39X8BdUlLI_3ks_jpdQyEwj/view',
    bibtex: `@article{xing2024evolved,
  title={Evolved differential model for sporadic graph time-series prediction},
  author={Xing, Yucheng and Wu, Jacqueline and Liu, Yingru and Yang, Xuewen and Wang, Xin},
  journal={Intelligent and Converged Networks},
  volume={5},
  number={3},
  pages={237--247},
  year={2024},
  publisher={TUP}
}`,
  },

  {
    id: 'hdg-ode',
    name: 'HDG-ODE',
    title: 'A Hierarchical Continuous-Time Model for Human Pose Forecasting',
    publicationUrl: 'https://ieeexplore.ieee.org/abstract/document/10377034?casa_token=vFB3meTr5z0AAAAA:BKu74lHDTHVlIkH3F3PwCkrDkFTKqVjjXh0j2c8Hknq7VEk7hbp7DFk0dF2Iyvqt7ODJ-7Lpyw', 
    authors: ['Yucheng Xing', 'Xin Wang'],
    venue: 'ICCV 2023',
    year: 2023,
    description: '[Acceptance Rate: 26.15%]', 
    image: 'hdg-ode.png',
    paper: 'https://drive.google.com/file/d/1OvwnWNbpqJJblmRF9eNGytzT8AvUnizG/view',
    code: 'https://github.com/SBU-YCX/HDG-ODE',
    poster: 'https://drive.google.com/file/d/1HpjivRwq_OyM8nLTWAn_JKgdarQ3sPnU/view',
    bibtex: `@inproceedings{xing2023hdg,
  title={HDG-ODE: A hierarchical continuous-time model for human pose forecasting},
  author={Xing, Yucheng and Wang, Xin},
  booktitle={2023 IEEE/CVF International Conference on Computer Vision (ICCV)},
  pages={14654--14666},
  year={2023},
  organization={IEEE}
}`,
  },

  {
    id: 'aggdn',
    name: 'AGGDN',
    title: 'A Continuous Stochastic Predictive Model for Monitoring Sporadic Time Series on Graphs',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-981-99-8079-6_11', 
    authors: ['Yucheng Xing', 'Jacqueline Wu', 'Yingru Liu', 'Xuewen Yang', 'Xin Wang'],
    venue: 'ICONIP 2023',
    year: 2023,
    image: 'aggdn.png',
    paper: 'https://drive.google.com/file/d/1cEpQEgUUr2Mxk0JkXIHnXXXoo5DGtf8t/view',
    code: 'https://github.com/SBU-YCX/AGGDN',
    poster: 'https://drive.google.com/file/d/1C59e3zZ5RO0grj_YElZAxjZeCRXOdrvr/view',
    bibtex: `@inproceedings{xing2023aggdn,
  title={AGGDN: A Continuous Stochastic Predictive Model for Monitoring Sporadic Time Series on Graphs},
  author={Xing, Yucheng and Wu, Jacqueline and Liu, Yingru and Yang, Xuewen and Wang, Xin},
  booktitle={International Conference on Neural Information Processing},
  pages={130--146},
  year={2023},
  organization={Springer}
}`,
  },

  {
    id: 'stochastic-networks',
    name: 'Continuous-Time Stochastic Differential Networks',
    title: 'for Sporadic Time Series Modeling',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-3-030-92307-5_40', 
    authors: [
      'Yingru Liu',
      'Yucheng Xing',
      'Xuewen Yang',
      'Xin Wang',
      'Jing Shi',
      'Di Jin',
      'Zhaoyue Chen',
      'Jacqueline Wu',
    ],
    venue: 'ICONIP 2021',
    year: 2021,
    image: 'stochastic-networks.png', 
    paper: 'https://drive.google.com/file/d/1Vf3adt8jPn2szaoLkz1d9s1qvU47VGfA/view',
    bibtex: `@inproceedings{liu2021continuous,
  title={Continuous-time stochastic differential networks for irregular time series modeling},
  author={Liu, Yingru and Xing, Yucheng and Yang, Xuewen and Wang, Xin and Shi, Jing and Jin, Di and Chen, Zhaoyue and Wu, Jacqueline},
  booktitle={International Conference on Neural Information Processing},
  pages={343--351},
  year={2021},
  organization={Springer}
}`,
  },

  {
    id: 'multi-person-pose',
    name: 'Multi-person 3D Pose Estimation',
    title: 'from Monocular Image Sequences',
    publicationUrl: 'https://link.springer.com/chapter/10.1007/978-3-030-36711-4_2', 
    authors: [
      'Ran Li',
      'Nayun Xu',
      'Xutong Lu',
      'Yucheng Xing',
      'Haohua Zhao',
      'Li Niu',
      'Liqing Zhang',
    ],
    venue: 'ICONIP 2019',
    year: 2019,
    image: 'multi-person-pose.png',
    paper: 'https://drive.google.com/file/d/1ym_l6YToCEosKh06st6HmDer48fde26v/view',
    bibtex: `@inproceedings{li2019multi,
  title={Multi-person 3D Pose Estimation from Monocular Image Sequences},
  author={Li, Ran and Xu, Nayun and Lu, Xutong and Xing, Yucheng and Zhao, Haohua and Niu, Li and Zhang, Liqing},
  booktitle={International Conference on Neural Information Processing},
  pages={15--24},
  year={2019},
  organization={Springer}
}`,
  },

  {
    id: 'ai-grid',
    name: 'AI-Grid',
    title: 'AI-Enabled, Smart Programmable Microgrids',
    authors: [
      'Peng Zhang',
      'Yifan Zhou',
      'Scott A. Smolka',
      'Scott D. Stoller',
      'Xin Wang',
      'Rong Zhao',
      'Tianyun Ling',
      'Yucheng Xing',
      'Shouvik Roy',
      'Amol Damare',
    ],
    venue: 'Microgrids: Theory and Practice',
    year: 2024,
    paper: 'https://onlinelibrary.wiley.com/doi/10.1002/9781119890881.ch2',
    bibtex:  `@article{zhang2024ai,
  title={AI-Grid: AI-Enabled, Smart Programmable Microgrids},
  author={Zhang, Peng and Zhou, Yifan and Smolka, Scott A and Stoller, Scott D and Wang, Xin and Zhao, Rong and Ling, Tianyun and Xing, Yucheng and Roy, Shouvik and Damare, Amol},
  journal={Microgrids: Theory and Practice},
  pages={7--58},
  year={2024},
  publisher={Wiley Online Library}
}`,
  },
];

export const preprints: Publication[] = [
  {
    id: 'spectral-diffusion',
    name: 'Spectral-Structured Diffusion',
    title: 'for Single-Image Rain Removal',
    authors: ['Yucheng Xing', 'Xin Wang'],
    venue: 'arXiv · 2026',
    year: 2026,
    publicationUrl: 'https://arxiv.org/abs/2603.09054',
    preprint: true,
  },

  {
    id: 'ntree-diffusion',
    name: 'N-Tree Diffusion',
    title: 'for Long-Horizon Wildfire Risk Forecasting',
    authors: ['Yucheng Xing', 'Xin Wang'],
    venue: 'arXiv · 2026',
    year: 2026,
    publicationUrl: 'https://arxiv.org/abs/2603.07361',
    preprint: true,
  },

  {
    id: 'dancer',
    name: 'DANCER:',
    title: 'Dance ANimation via Condition Enhancement and Rendering with diffusion model',
    authors: ['Yucheng Xing*', 'Jinxing Yin*', 'Xiaodong Liu*', 'Xin Wang'],
    venue: 'arXiv · 2025',
    year: 2025,
    description: '* Equal contribution'
    publicationUrl: 'https://arxiv.org/abs/2510.27169',
    preprint: true,
  },

  {
    id: 'ac-diff',
    name: 'Input-Adaptive Generative Dynamics',
    title: 'in Diffusion Models',
    authors: ['Yucheng Xing', 'Xiaodong Liu', 'Xin Wang'],
    venue: 'arXiv · 2024',
    year: 2024,
    description: 'Adaptive control of the diffusion process for efficient conditional generation.',
    publicationUrl: 'https://arxiv.org/abs/2411.15199',
    preprint: true,
  },

  {
    id: 'mftp',
    name: 'Map-Free Trajectory Prediction',
    title: 'with Map Distillation and Hierarchical Encoding',
    authors: ['Xiaodong Liu', 'Yucheng Xing', 'Xin Wang'],
    venue: 'arXiv · 2024',
    year: 2024,
    publicationUrl: 'https://arxiv.org/abs/2411.10961',
    preprint: true,
  },
];

export const selected = ['puppet-cnn', 'hdg-ode', 'infinity-net'].map((id) =>
  publications.find((p) => p.id === id)!,
);
