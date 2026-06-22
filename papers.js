// Author helpers:
// - "Name" -> normal author
// - coFirst("Name") -> Name*
// - corresponding("Name") -> Name[corresponding]
// - marked("Name", { coFirst: true, corresponding: true }) -> Name*[corresponding]
// Paper helpers:
// - selected: true -> shown in "Recent Highlights"
// - preprint: true -> shown in "Pre-print"
// - image / video can use just the filename under `Wei Zhai_files`

const OWNER = "Wei Zhai";

function marked(name, flags = {}) {
  return { name, ...flags };
}

function coFirst(name) {
  return { name, coFirst: true };
}

function corresponding(name) {
  return { name, corresponding: true };
}

window.PAPERS_DATA = {
  owner: OWNER,
  papers: [
  {
    id: "yan2026consistency",
    title: "Consistency in Diffusion-Based Visual Generation: A Survey",
    authors: [
      "Song Yan",
      "Wei Zhai",
      "Chenfeng Wang",
      "Ruixuan Li",
      "Zhangping Yang",
      "Yancheng Cai",
      "Tao Zhang",
      "Ling Wang",
      "Yunwei Lan",
      "Yujie He",
      "Yang Cao",
      "Min Li",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    preprint: true,
    selected: true,
    venue: "Preprints.org, 2026",
    description: "Provides a structured survey of consistency in diffusion-based visual generation, unifying image, video, and 3D literature through a clear taxonomy of agreement relations, benchmarks, and open problems.",
    image: "yan2026consistency.png",
    links: {
      pdf: "https://www.preprints.org/frontend/manuscript/bb70c5a8337c1ff741d45d43f2392e23/download_pub",
      project: "https://github.com/Shawn-CodeDev/Awesome-Consistency-Diffusion-Visual-Generation"
    },
    starRepos: {
      project: "Shawn-CodeDev/Awesome-Consistency-Diffusion-Visual-Generation"
    },
    bibtex: `@article{yan2026consistency,
  title={Consistency in Diffusion-Based Visual Generation: A Survey},
  author={Yan, Song and Zhai, Wei and Wang, Chenfeng and Li, Ruixuan and Yang, Zhangping and Cai, Yancheng and Zhang, Tao and Wang, Ling and Lan, Yunwei and He, Yujie and Cao, Yang and Li, Min and Zha, Zheng-Jun},
  journal={Preprints.org},
  year={2026}
}`
  },

  {
    id: "zhang2026end",
    title: "End-to-End Spatial-Temporal Transformer for Real-time 4D HOI Reconstruction",
    authors: [
      "Haoyu Zhang",
      "Wei Zhai",
      "Yuhang Yang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    preprint: true,
    selected: true,
    venue: "Arxiv",
    description: "Delivers real-time 4D human-object reconstruction from a single video with an end-to-end spatial-temporal transformer, avoiding test-time optimization while preserving physically plausible motion and interaction.",
    video: "zhang2026end.mp4",
    links: {
      pdf: "https://arxiv.org/abs/2603.14435",
      project: "https://nianheng.github.io/THO-project/"
    },
    bibtex: `@article{zhang2026end,
  title={End-to-End Spatial-Temporal Transformer for Real-time 4D HOI Reconstruction},
  author={Zhang, Haoyu and Zhai, Wei and Yang, Yuhang and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2603.14435},
  year={2026}
}`
  },

  {
    id: "yu2026explore",
    title: "EXPLORE-Bench: Egocentric Scene Prediction with Long-Horizon Reasoning",
    authors: [
      "Chengjun Yu",
      "Xuhan Zhu",
      "Chaoqun Du",
      "Pengfei Yu",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    selected: true,
    venue: "In ECCV 2026",
    description: "Introduces a challenging benchmark for long-horizon egocentric scene prediction, exposing how far current multimodal models still are from reliably reasoning about the physical consequences of actions.",
    image: "yu2026explore.png",
    links: {
      pdf: "https://arxiv.org/abs/2603.09731",
      project: "https://jackyu6.github.io/EXPLORE-Page/"
    },
    bibtex: `@article{yu2026explore,
  title={EXPLORE-Bench: Egocentric Scene Prediction with Long-Horizon Reasoning},
  author={Yu, Chengjun and Zhu, XuHan and Du, Chaoqun and Yu, Pengfei and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2603.09731},
  year={2026}
}`
  },

  {
    id: "valueanchoredgrouppolicyoptimiza",
    title: "Value-Anchored Group Policy Optimization for Flow Models",
    authors: [
      "Yawen Shao",
      "Jie Xiao",
      "Kai Zhu",
      "Yu Liu",
      "Wei Zhai",
      "Yuhang Yang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    preprint: true,
    venue: "Arxiv",
    image: "shao2025value.png"
  },

  {
    id: "yang2025videogen",
    title: "VideoGen-Eval: Agent-based System for Video Generation Evaluation",
    authors: [
      "Yuhang Yang",
      "Shangkun Sun",
      "Hongxiang Li",
      "Ke Fan",
      "Ailing Zeng",
      "Feilin Han",
      "Wei Zhai",
      "Wei Liu",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    preprint: true,
    venue: "Arxiv",
    image: "yang2025videogen.png",
    links: {
      pdf: "https://arxiv.org/abs/2503.23452",
      code: "https://github.com/AILab-CVC/VideoGen-Eval"
    },
    bibtex: `@article{yang2025videogen,
  title={VideoGen-Eval: Agent-based System for Video Generation Evaluation},
  author={Yang, Yuhang and Fan, Ke and Sun, Shangkun and Li, Hongxiang and Zeng, Ailing and Han, FeiLin and Zhai, Wei and Liu, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2503.23452},
  year={2025}
}`
  },

  {
    id: "luo2024visual",
    title: "Visual-Geometric Collaborative Guidance for Affordance Learning",
    authors: [
      "Hongchen Luo",
      "Wei Zhai",
      "Jiao Wang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    preprint: true,
    venue: "Arxiv",
    venueNote: "Journal version of \"Leverage Interactive Affinity for Affordance Learning\" (CVPR 2023)",
    image: "luo2024visual.png",
    links: {
      pdf: "https://arxiv.org/pdf/2410.11363",
      code: "https://github.com/lhc1224/VCR-Net"
    },
    bibtex: `@article{luo2024visual,
    title={Visual-Geometric Collaborative Guidance for Affordance Learning},
    author={Luo, Hongchen and Zhai, Wei and Wang, Jiao and Cao, Yang and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2410.11363},
    year={2024}
    }`
  },

  {
    id: "liu2024grounding",
    title: "Grounding 3D Scene Affordance From Egocentric Interactions",
    authors: [
      "Cuiyu Liu",
      "Wei Zhai",
      "Yuhang Yang",
      "Hongchen Luo",
      "Sen Liang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    preprint: true,
    venue: "Arxiv",
    image: "liu2024grounding.png",
    links: {
      pdf: "https://arxiv.org/pdf/2409.19650"
    },
    bibtex: `@article{liu2024grounding,
    title={Grounding 3D Scene Affordance From Egocentric Interactions},
    author={Liu, Cuiyu and Zhai, Wei and Yang, Yuhang and Luo, Hongchen and Liang, Sen and Cao, Yang and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2409.19650},
    year={2024}
    }`
  },

  {
    id: "fang2024vivid",
    title: "ViViD: Video Virtual Try-on using Diffusion Models",
    authors: [
      "Zixun Fang",
      "Wei Zhai",
      "Aimin Su",
      "Hongliang Song",
      "Kai Zhu",
      "Mao Wang",
      "Yu Chen",
      "Zhiheng Liu",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    preprint: true,
    venue: "Arxiv",
    image: "fang2024vivid.gif",
    links: {
      pdf: "https://arxiv.org/abs/2405.11794",
      code: "https://github.com/alibaba-yuanjing-aigclab/ViViD"
    },
    starRepos: {
      code: "alibaba-yuanjing-aigclab/ViViD"
    },
    bibtex: `@article{fang2024vivid,
    title={ViViD: Video Virtual Try-on using Diffusion Models},
    author={Fang, Zixun and Zhai, Wei and Su, Aimin and Song, Hongliang and Zhu, Kai and Wang, Mao and Chen, Yu and Liu, Zhiheng and Cao, Yang and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2405.11794},
    year={2024}
    }`
  },

  {
    id: "luo2024intention",
    title: "Intention-driven Ego-to-Exo Video Generation",
    authors: [
      "Hongchen Luo",
      "Kai Zhu",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2024,
    preprint: true,
    venue: "Arxiv",
    image: "luo2024intention.png",
    links: {
      pdf: "https://arxiv.org/abs/2403.09194"
    },
    bibtex: `@article{luo2024intention,
    title={Intention-driven Ego-to-Exo Video Generation},
    author={Luo, Hongchen and Zhu, Kai and Zhai, Wei and Cao, Yang},
    journal={arXiv preprint arXiv:2403.09194},
    year={2024}
    }`
  },

  {
    id: "skyfindalargescalebenchmarkunvei",
    title: "SkyFind: A Large-Scale Benchmark Unveiling Referring Expression Comprehension for UAV",
    authors: [
      "Kunyu Wang",
      "Guanbo Wu",
      "Xueyang Fu",
      "Xingbo Wang",
      "Kean Liu",
      "Xin Lu",
      "Chengjie Ge",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    selected: true,
    venue: "In IEEE T-PAMI",
    description: "Establishes UAV-based referring expression comprehension as a formal task and introduces SkyFind, a million-pair benchmark that turns aerial target grounding into a genuinely large-scale problem.",
    image: "wang2026skyfind.png",
    links: {
      pdf: "https://www.computer.org/csdl/journal/tp/5555/01/11475181/2fuLQIZcQMw",
      code: "https://github.com/wangkunyu241/SkyFind"
    },
    starRepos: {
      code: "wangkunyu241/SkyFind"
    }
  },

  {
    id: "wu2026event",
    title: "Event-based Visual Deformation Measurement",
    authors: [
      "Yuliang Wu",
      corresponding("Wei Zhai"),
      "Yuxin Cui",
      "Tiesong Zhao",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    selected: true,
    rating: "highlight",
    venue: "In CVPR 2026",
    description: "Measures dense non-rigid deformation with an event-frame fusion pipeline that remains robust over long horizons while using only a fraction of the compute demanded by high-speed video alternatives.",
    image: "wu2026event.png",
    links: {
      pdf: "https://arxiv.org/abs/2602.14376"
    },
    bibtex: `@article{wu2026event,
  title={Event-based Visual Deformation Measurement},
  author={Wu, Yuliang and Zhai, Wei and Cui, Yuxin and Zhao, Tiesong and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2602.14376},
  year={2026}
}`
  },

  {
    id: "yang2026gloria",
    title: "Gloria: Consistent Character Video Generation via Content Anchors",
    authors: [
      "Yuhang Yang",
      "Fan Zhang",
      "Huaijin Pi",
      "Shuai Guo",
      "Guowei Xu",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    selected: true,
    venue: "In CVPR 2026",
    description: "Pushes character video generation to the long-form regime with anchor-based content control, sustaining identity and multi-view appearance consistency over videos lasting ten minutes or more.",
    video: "yang2026gloria.mp4",
    links: {
      pdf: "https://arxiv.org/abs/2603.29931",
      project: "https://yyvhang.github.io/Gloria_Page/"
    },
    bibtex: `@article{yang2026gloria,
  title={Gloria: Consistent Character Video Generation via Content Anchors},
  author={Yang, Yuhang and Zhang, Fan and Pi, Huaijin and Guo, Shuai and Xu, Guowei and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2603.29931},
  year={2026}
}`
  },

  {
    id: "zhang2026mate",
    title: "MatE: Material Extraction from Single-Image via Geometric Prior",
    authors: [
      "Zeyu Zhang",
      corresponding("Wei Zhai"),
      "Jian Yang",
      corresponding("Yang Cao")
    ],
    year: 2026,
    venue: "In CVPR 2026",
    image: "zhang2026mate.png",
    links: {
      pdf: "https://arxiv.org/abs/2512.18312",
      project: "https://tiptoehigherz.github.io/Material-Extraction/"
    },
    bibtex: `@article{zhang2025mate,
  title={MatE: Material Extraction from Single-Image via Geometric Prior},
  author={Zhang, Zeyu and Zhai, Wei and Yang, Jian and Cao, Yang},
  journal={arXiv preprint arXiv:2512.18312},
  year={2025}
}`
  },

  {
    id: "unsupervised3dmotionestimationus",
    title: "Unsupervised 3d Motion Estimation Using Event Camera",
    authors: [
      "Han Han",
      corresponding("Wei Zhai"),
      "Tiesong Zhao",
      "Bin Li",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    venue: "In CVPR 2026",
    image: "han2026unsupervised.png"
  },

  {
    id: "yang2026wemmu",
    title: "WeMMU: Enhanced Bridging of Vision-Language Models and Diffusion Models via Noisy Query Tokens",
    authors: [
      "Jian Yang",
      "Dacheng Yin",
      "Xiaoxuan He",
      "Yong Li",
      "Fengyun Rao",
      "Jing Lyu",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    venue: "In CVPR 2026",
    image: "yang2026wemmu.png",
    links: {
      pdf: "https://arxiv.org/abs/2512.02536"
    },
    bibtex: `@article{yang2025wemmu,
  title={WeMMU: Enhanced Bridging of Vision-Language Models and Diffusion Models via Noisy Query Tokens},
  author={Yang, Jian and Yin, Dacheng and He, Xiaoxuan and Li, Yong and Rao, Fengyun and Lyu, Jing and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2512.02536},
  year={2025}
}`
  },

  {
    id: "diffusionguidedchainofvisionforl",
    title: "Diffusion Guided Chain-of-Vision for Large Autoregressive Vision Models",
    authors: [
      "Xinyang Wang",
      "Kecheng Zheng",
      "Minfeng Zhu",
      "Wei Wu",
      "Fan Lu",
      "Wei Zhai",
      "Wei Chen"
    ],
    year: 2026,
    venue: "In CVPR 2026",
    image: "wang2026diffusion.png"
  },

  {
    id: "chen2025event",
    title: "Event Signal Filtering via Probability Flux Estimation",
    authors: [
      "Jinze Chen",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Bin Li",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    venue: "In CVPR 2026",
    image: "chen2025event.png",
    links: {
      pdf: "https://arxiv.org/abs/2504.07503"
    },
    bibtex: `@article{chen2025event,
title={Event Signal Filtering via Probability Flux Estimation},
author={Chen, Jinze and Zhai, Wei and Cao, Yang and Li, Bin and Zha, Zheng-Jun},
journal={arXiv preprint arXiv:2504.07503},
year={2025}
}`
  },

  {
    id: "han2025touch",
    title: "TOUCH: Text-guided Controllable Generation of Free-Form Hand-Object Interactions",
    authors: [
      coFirst("Guangyi Han"),
      coFirst("Wei Zhai"),
      "Yuhang Yang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    selected: true,
    venue: "In ICLR 2026",
    description: "Moves hand-object generation beyond simple grasping by introducing free-form interaction control, backed by a large-scale dataset and a diffusion framework that handles richer contact semantics.",
    image: "han2026touch.gif",
    links: {
      pdf: "https://arxiv.org/abs/2510.14874",
      project: "https://guangyid.github.io/hoi123touch/"
    },
    bibtex: `@article{han2025touch,
  title={TOUCH: Text-guided Controllable Generation of Free-Form Hand-Object Interactions},
  author={Han, Guangyi and Zhai, Wei and Yang, Yuhang and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2510.14874},
  year={2025}
}`
  },

  {
    id: "chen2026unbias",
    title: "Unbiased Gradient Estimation for Event Binning via Functional Backpropagation",
    authors: [
      "Jinze Chen",
      corresponding("Wei Zhai"),
      "Han Han",
      "Tiankai Ma",
      "Yang Cao",
      "Bin Li",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    venue: "In ICLR 2026",
    image: "chen2026unbias.png",
    links: {
      pdf: "https://arxiv.org/abs/2602.12590"
    },
    bibtex: `@article{chen2026unbiased,
  title={Unbiased Gradient Estimation for Event Binning via Functional Backpropagation},
  author={Chen, Jinze and Zhai, Wei and Han, Han and Ma, Tiankai and Cao, Yang and Li, Bin and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2602.12590},
  year={2026}
}`
  },

  {
    id: "wu2025alitok",
    title: "Towards Sequence Modeling Alignment between Tokenizer and Autoregressive Model",
    authors: [
      "Pingyu Wu",
      "Kai Zhu",
      "Yu Liu",
      "Longxiang Tang",
      "Jian Yang",
      "Yansong Peng",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2026,
    venue: "In ICLR 2026",
    image: "wu2025alitok.png",
    links: {
      pdf: "https://arxiv.org/abs/2506.05289",
      code: "https://github.com/ali-vilab/alitok"
    },
    starRepos: {
      code: "ali-vilab/alitok"
    },
    bibtex: `@article{wu2025alitok,
  title={AliTok: Towards Sequence Modeling Alignment between Tokenizer and Autoregressive Model},
  author={Wu, Pingyu and Zhu, Kai and Liu, Yu and Tang, Longxiang and Yang, Jian and Peng, Yansong and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2506.05289},
  year={2025}
}`
  },

  {
    id: "emateventorientedmambaforegocent",
    title: "E-MaT: Event-oriented Mamba for Egocentric Point Tracking",
    authors: [
      "Han Han",
      corresponding("Wei Zhai"),
      "Baocai Yin",
      "Yang Cao",
      "Bin Li",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In AAAI 2025",
    image: "han2025e.png"
  },

  {
    id: "wang2025towards",
    title: "Towards Better De-raining Generalization via Rainy Characteristics Memorization and Replay",
    authors: [
      "Kunyu Wang",
      "Xueyang Fu",
      "Chengzhi Cao",
      "Chengjie Ge",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In IEEE T-NNLS",
    image: "wang2025towards.png",
    links: {
      pdf: "https://arxiv.org/abs/2506.02477"
    },
    bibtex: `@article{wang2025towards,
  title={Towards Better De-raining Generalization via Rainy Characteristics Memorization and Replay},
  author={Wang, Kunyu and Fu, Xueyang and Cao, Chengzhi and Ge, Chengjie and Zhai, Wei and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2506.02477},
  year={2025}
}`
  },

  {
    id: "liao2024ef-bib-list",
    title: "EF-3DGS: Event-Aided Free-Trajectory 3D Gaussian Splatting",
    authors: [
      "Bohao Liao",
      corresponding("Wei Zhai"),
      "Zengyu Wan",
      "Zhixin Cheng",
      "Wenfei Yang",
      "Yang Cao",
      "Tianzhu Zhang",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    selected: true,
    rating: "spotlight",
    venue: "In NeurIPS 2025",
    description: "Brings event cameras into 3D Gaussian Splatting, enabling free-trajectory rendering with cleaner geometry and noticeably stronger stability when motion becomes too fast for frame-only capture.",
    image: "liao2024ef.png",
    links: {
      pdf: "https://arxiv.org/pdf/2410.15392",
      code: "https://lbh666.github.io/ef-3dgs/"
    }
  },

  {
    id: "fang2025panoramic",
    title: "ViewPoint: Panoramic Video Generation with Pretrained Diffusion Models",
    authors: [
      "Zixun Fang",
      "Kai Zhu",
      "Zhiheng Liu",
      "Yu Liu",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In NeurIPS 2025",
    image: "fang2025panoramic.png",
    links: {
      pdf: "https://arxiv.org/abs/2506.23513",
      project: "https://becauseimbatman0.github.io/ViewPoint"
    },
    bibtex: `@article{fang2025panoramic,
  title={Panoramic Video Generation with Pretrained Diffusion Models},
  author={Fang, Zixun and Zhu, Kai and Liu, Zhiheng and Liu, Yu and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2506.23513},
  year={2025}
}`
  },

  {
    id: "wang2025paid",
    title: "PAID: Pairwise Angular-Invariant Decomposition for Continual Test-Time Adaptation",
    authors: [
      "Kunyu Wang",
      "Xueyang Fu",
      "Yuanfei Bao",
      "Chengjie Ge",
      "Chengzhi Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In NeurIPS 2025",
    image: "wang2025paid.jpg",
    links: {
      pdf: "https://arxiv.org/abs/2506.02453",
      code: "https://github.com/wangkunyu241/PAID"
    },
    bibtex: `@article{wang2025paid,
  title={PAID: Pairwise Angular-Invariant Decomposition for Continual Test-Time Adaptation},
  author={Wang, Kunyu and Fu, Xueyang and Bao, Yuanfei and Ge, Chengjie and Cao, Chengzhi and Zhai, Wei and Zha, Zheng-Jun},
  journal={arXiv preprint arXiv:2506.02453},
  year={2025}
}`
  },

  {
    id: "huang2024leverage",
    title: "Learning Object Affordance Ranking with Task Context",
    authors: [
      "Haojie Huang",
      corresponding("Hongchen Luo"),
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    rating: "best student paper",
    venue: "In ACM MM 2025 MSMA Workshop",
    image: "huang2024leverage.png",
    links: {
      pdf: "https://arxiv.org/abs/2411.16082",
      code: "https://wpy1999.github.io/IV-VAE/"
    },
    bibtex: `@article{huang2024leverage,
title={Leverage Task Context for Object Affordance Ranking},
author={Huang, Haojie and Luo, Hongchen and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
journal={arXiv preprint arXiv:2411.16082},
year={2024}
}`
  },

  {
    id: "yang2025sigman",
    title: "SIGMAN: Scaling 3D Human Gaussian Generation with Millions of Assets",
    authors: [
      "Yuhang Yang",
      "Fengqi Liu",
      "Yixing Lu",
      "Qin Zhao",
      "Pingyu Wu",
      corresponding("Wei Zhai"),
      "Ran Yi",
      "Yang Cao",
      "Lizhuang Ma",
      "Zheng-Jun Zha",
      corresponding("Junting Dong")
    ],
    year: 2025,
    venue: "In ICCV 2025",
    image: "yang2025sigman.gif",
    links: {
      pdf: "https://arxiv.org/abs/2504.06982",
      code: "https://yyvhang.github.io/SIGMAN_3D/"
    },
    bibtex: `@article{yang2025sigman,
  title={SIGMAN: Scaling 3D Human Gaussian Generation with Millions of Assets},
  author={Yang, Yuhang and Liu, Fengqi and Lu, Yixing and Zhao, Qin and Wu, Pingyu and Zhai, Wei and Yi, Ran and Cao, Yang and Ma, Lizhuang and Zha, Zheng-Jun and others},
  journal={arXiv preprint arXiv:2504.06982},
  year={2025}
}`
  },

  {
    id: "yu2025hero",
    title: "HERO: Human Reaction Generation from Videos",
    authors: [
      "Chengjun Yu",
      corresponding("Wei Zhai"),
      "Yuhang Yang",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    selected: true,
    venue: "In ICCV 2025",
    description: "Generates human reactions directly from video content, turning observed events into temporally coherent responses that feel substantially closer to real social dynamics.",
    image: "yu2025hero.png",
    links: {
      pdf: "https://arxiv.org/abs/2503.08270",
      code: "https://github.com/JackYu6/HERO_release"
    },
    starRepos: {
      code: "JackYu6/HERO_release"
    },
    bibtex: `@inproceedings{yu2025hero,
title={HERO: Human Reaction Generation from Videos},
author={Yu, Chengjun and Zhai, Wei and Yang, Yuhang and Cao, Yang and Zha, Zheng-Jun},
journal={arXiv preprint arXiv:2503.08270},
year={2025}
}`
  },

  {
    id: "han2024event",
    title: "MATE: Motion-Augmented Temporal Consistency for Event-based Point Tracking",
    authors: [
      "Han Han",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Bin Li",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In ICCV 2025",
    image: "han2024event.png",
    links: {
      pdf: "https://arxiv.org/abs/2412.01300",
      code: "https://hh-xiaohu.github.io/Ev-TAP/"
    },
    bibtex: `@article{han2024event,
title={Event-Based Tracking Any Point with Motion-Augmented Temporal Consistency},
author={Han, Han and Zhai, Wei and Cao, Yang and Li, Bin and Zha, Zheng-jun},
journal={arXiv preprint arXiv:2412.01300},
year={2024}
}`
  },

  {
    id: "wan2025emotive",
    title: "EMoTive: Event-guided Trajectory Modeling for 3D Motion Estimation",
    authors: [
      "Zengyu Wan",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    selected: true,
    venue: "In ICCV 2025",
    description: "Improves 3D motion estimation with event-guided trajectory modeling, recovering fast and subtle dynamics that conventional frame-based pipelines tend to miss or blur.",
    image: "wan2025emotive.png",
    links: {
      pdf: "https://arxiv.org/abs/2503.11371"
    },
    bibtex: `@article{wan2025emotive,
  title={EMoTive: Event-guided Trajectory Modeling for 3D Motion Estimation},
  author={Wan, Zengyu and Zhai, Wei and Cao, Yang and Zha, Zhengjun},
  journal={arXiv preprint arXiv:2503.11371},
  year={2025}
}`
  },

  {
    id: "zhang2024pear",
    title: "PEAR: Phrase-Based Hand-Object Interaction Anticipation",
    authors: [
      "Zichen Zhang",
      "Hongchen Luo",
      "Wei Zhai",
      "Yang Cao",
      "Yu Kang"
    ],
    year: 2025,
    venue: "In SCIENCE CHINA Information Sciences (SCIS)",
    image: "zhang2024pear.png",
    links: {
      pdf: "https://arxiv.org/pdf/2407.21510"
    },
    bibtex: `@article{zhang2024pear,
    title={PEAR: Phrase-Based Hand-Object Interaction Anticipation},
    author={Zhang, Zichen and Luo, Hongchen and Zhai, Wei and Cao, Yang and Kang, Yu},
    journal={arXiv preprint arXiv:2407.21510},
    year={2024}
    }`
  },

  {
    id: "wu2025brat",
    title: "BRAT: Bidirectional Relative Positional Attention Transformer for Event-based Eye tracking",
    authors: [
      "Yuliang Wu",
      "Han Han",
      "Jinze Chen",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    rating: "1st place challenge",
    venue: "In CVPR 2025 Workshop",
    image: "wu2025brat.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2025W/EventVision/papers/Wu_BRAT_Bidirectional_Relative_Positional_Attention_Transformer_for_Event-based_Eye_tracking_CVPRW_2025_paper.pdf"
    },
    bibtex: `@inproceedings{wu2025brat,
  title={BRAT: Bidirectional Relative Positional Attention Transformer for Event-based Eye tracking},
  author={Wu, Yuliang and Han, Han and Chen, Jinze and Zhai, Wei and Cao, Yang and Zha, Zheng-jun},
  booktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},
  pages={5136--5144},
  year={2025}
}`
  },

  {
    id: "lu2024benchmarking",
    title: "Benchmarking Large Vision-Language Models via Directed Scene Graph for Comprehensive Image Captioning",
    authors: [
      "Fan Lu",
      "Wei Wu",
      corresponding("Kecheng Zheng"),
      "Shuailei Ma",
      "Biao Gong",
      "Jiawei Liu",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Yujun Shen",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In CVPR 2025",
    image: "lu2024benchmarking.png",
    links: {
      pdf: "https://arxiv.org/abs/2412.08614",
      code: "https://github.com/LuFan31/CompreCap"
    },
    bibtex: `@article{lu2024benchmarking,
    title={Benchmarking Large Vision-Language Models via Directed Scene Graph for Comprehensive Image Captioning},
    author={Lu, Fan and Wu, Wei and Zheng, Kecheng and Ma, Shuailei and Gong, Biao and Liu, Jiawei and Zhai, Wei and Cao, Yang and Shen, Yujun and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2412.08614},
    year={2024}
    }`
  },

  {
    id: "shao2024great",
    title: "GREAT: Geometry-Intention Collaborative Inference for Open-Vocabulary 3D Object Affordance Grounding",
    authors: [
      "Yawen Shao",
      corresponding("Wei Zhai"),
      "Yuhang Yang",
      "Hongchen Luo",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In CVPR 2025",
    image: "shao2024great.png",
    links: {
      pdf: "https://arxiv.org/abs/2411.19626",
      code: "https://yawen-shao.github.io/GREAT/"
    },
    bibtex: `@article{shao2024great,
title={GREAT: Geometry-Intention Collaborative Inference for Open-Vocabulary 3D Object Affordance Grounding},
author={Shao, Yawen and Zhai, Wei and Yang, Yuhang and Luo, Hongchen and Cao, Yang and Zha, Zheng-Jun},
journal={arXiv preprint arXiv:2411.19626},
year={2024}
}`
  },

  {
    id: "wu2024improved",
    title: "Improved Video VAE for Latent Video Diffusion Model",
    authors: [
      "Pingyu Wu",
      corresponding("Kai Zhu"),
      "Yu Liu",
      "Liming Zhao",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In CVPR 2025",
    image: "wu2024improved.png",
    links: {
      pdf: "https://arxiv.org/abs/2411.06449",
      code: "https://wpy1999.github.io/IV-VAE/"
    },
    bibtex: `@article{wu2024improved,
title={Improved Video VAE for Latent Video Diffusion Model},
author={Wu, Pingyu and Zhu, Kai and Liu, Yu and Zhao, Liming and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
journal={arXiv preprint arXiv:2411.06449},
year={2024}
}`
  },

  {
    id: "yang2024mmar",
    title: "MMAR: Towards Lossless Multi-Modal Auto-Regressive Prababilistic Modeling",
    authors: [
      "Jian Yang",
      "Dacheng Yin",
      "Yizhou Zhou",
      "Fengyun Rao",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In CVPR 2025",
    image: "yang2024mmar.png",
    links: {
      pdf: "https://arxiv.org/pdf/2410.10798"
    },
    bibtex: `@article{yang2024mmar,
    title={MMAR: Towards Lossless Multi-Modal Auto-Regressive Prababilistic Modeling},
    author={Yang, Jian and Yin, Dacheng and Zhou, Yizhou and Rao, Fengyun and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2410.10798},
    year={2024}
    }`
  },

  {
    id: "efficienttesttimeadaptiveobjectd",
    title: "Efficient Test-time Adaptive Object Detection via Sensitivity-Guided Pruning",
    authors: [
      "Kunyu Wang",
      "Xueyang Fu",
      "Xin Lu",
      "Chengjie Ge",
      "Chengzhi Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    rating: "oral",
    venue: "In CVPR 2025",
    image: "wang2025efficient.png"
  },

  {
    id: "deng2024vmad",
    title: "VMAD: Visual-enhanced Multimodal Large Language Model for Zero-Shot Anomaly Detection",
    authors: [
      "Huilin Deng",
      "Hongchen Luo",
      "Wei Zhai",
      "Yang Cao",
      "Yu Kang"
    ],
    year: 2025,
    venue: "In IEEE T-ASE",
    image: "deng2024vmad.png",
    links: {
      pdf: "https://arxiv.org/pdf/2409.20146"
    },
    bibtex: `@article{deng2024vmad,
    title={VMAD: Visual-enhanced Multimodal Large Language Model for Zero-Shot Anomaly Detection},
    author={Deng, Huilin and Luo, Hongchen and Zhai, Wei and Cao, Yang and Kang, Yu},
    journal={arXiv preprint arXiv:2409.20146},
    year={2024}
    }`
  },

  {
    id: "lu2023likelihood",
    title: "Likelihood-Aware Semantic Alignment for Full-Spectrum Out-of-Distribution Detection",
    authors: [
      "Fan Lu",
      "Kai Zhu",
      "Kecheng Zheng",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2025,
    venue: "In Journal of Intelligent Computing and Networking",
    image: "lu2023likelihood.png",
    links: {
      pdf: "https://arxiv.org/abs/2312.01732",
      code: "https://github.com/LuFan31/LSA"
    },
    bibtex: `@article{lu2023likelihood,
    title={Likelihood-Aware Semantic Alignment for Full-Spectrum Out-of-Distribution Detection},
    author={Lu, Fan and Zhu, Kai and Zheng, Kecheng and Zhai, Wei and Cao, Yang},
    journal={arXiv preprint arXiv:2312.01732},
    year={2023}
    }`
  },

  {
    id: "yang2024egochoir",
    title: "EgoChoir: Capturing 3D Human-Object Interaction Regions from Egocentric Views",
    authors: [
      "Yuhang Yang",
      corresponding("Wei Zhai"),
      "Chengfeng Wang",
      "Chengjun Yu",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    selected: true,
    venue: "In NeurIPS 2024",
    description: "Captures functional 3D human-object interaction regions from egocentric views, making it possible to localize where interaction actually happens rather than only where objects appear.",
    image: "yang2024egochoir.gif",
    links: {
      pdf: "https://openreview.net/pdf?id=ea4oxkiMP7",
      code: "https://github.com/yyvhang/EgoChoir_release"
    },
    starRepos: {
      code: "yyvhang/EgoChoir_release"
    },
    bibtex: `@article{yang2024egochoir,
    title={EgoChoir: Capturing 3D Human-Object Interaction Regions from Egocentric Views},
    author={Yang, Yuhang and Zhai, Wei and Wang, Chengfeng and Yu, Chengjun and Cao, Yang and Zha, Zheng-Jun},
    journal={arXiv preprint arXiv:2405.13659},
    year={2024}
    }`
  },

  {
    id: "unidenseunleashingdiffusionmodel",
    title: "UniDense: Unleashing Diffusion Models with Meta-Routers for Universal Few-Shot Dense Prediction",
    authors: [
      "Lintao Dong",
      corresponding("Wei Zhai"),
      "Zheng-Jun Zha"
    ],
    year: 2024,
    venue: "In ACM MM 2024",
    image: "dong2024unidense.png",
    links: {
      pdf: "https://dl.acm.org/doi/pdf/10.1145/3664647.3680831"
    }
  },

  {
    id: "wan2023event",
    title: "Event-based Optical Flow via Transforming into Motion-dependent View",
    authors: [
      "Zengyu Wan",
      "Yang Wang",
      corresponding("Wei Zhai"),
      "Ganchao Tan",
      "Yang Cao",
      corresponding("Zheng-Jun Zha")
    ],
    year: 2024,
    venue: "In IEEE T-IP",
    image: "wan2023event.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/10612786/"
    },
    bibtex: `@article{wan2024event,
    title={Event-based Optical Flow via Transforming into Motion-dependent View},
    author={Wan, Zengyu and Wang, Yang and Wei, Zhai and Tan, Ganchao and Cao, Yang and Zha, Zheng-Jun},
    journal={IEEE Transactions on Image Processing},
    year={2024},
    publisher={IEEE}
    }`
  },

  {
    id: "zhang2023bidirectional",
    title: "Bidirectional Progressive Transformer for Interaction Intention Anticipation",
    authors: [
      "Zichen Zhang",
      "Hongchen Luo",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Yu Kang"
    ],
    year: 2024,
    venue: "In ECCV 2024",
    image: "zhang2023bidirectional.png",
    links: {
      pdf: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/07631.pdf"
    },
    bibtex: `@article{zhang2024bidirectional,
    title={Bidirectional Progressive Transformer for Interaction Intention Anticipation},
    author={Zhang, Zichen and Luo, Hongchen and Zhai, Wei and Cao, Yang and Kang, Yu},
    journal={arXiv preprint arXiv:2405.05552},
    year={2024}
    }`
  },

  {
    id: "wu2024event",
    title: "Event-based Asynchronous HDR Imaging by Temporal Incident Light Modulation",
    authors: [
      "Yuliang Wu",
      "Ganchao Tan",
      "Jinze Chen",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    venue: "In Optics Express",
    image: "wu2024event.png",
    links: {
      pdf: "https://opg.optica.org/oe/fulltext.cfm?uri=oe-32-11-18527&id=549921"
    },
    bibtex: `@article{wu2024event,
    title={Event-based asynchronous HDR imaging by temporal incident light modulation},
    author={Wu, Yuliang and Tan, Ganchao and Chen, Jinze and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
    journal={Optics Express},
    volume={32},
    number={11},
    pages={18527--18538},
    year={2024},
    publisher={Optica Publishing Group}
    }`
  },

  {
    id: "deng2023prioritized",
    title: "Prioritized Local Matching Network for Cross-Category Few-Shot Anomaly Detection",
    authors: [
      "Huilin Deng",
      "Hongchen Luo",
      "Wei Zhai",
      "Yang Cao",
      "Yanming Guo",
      "Yu Kang"
    ],
    year: 2024,
    venue: "In IEEE T-AI",
    image: "deng2023priorited.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/10494062"
    },
    bibtex: `@article{deng2024prioritized,
    title={Prioritized Local Matching Network for Cross-Category Few-Shot Anomaly Detection},
    author={Deng, Huilin and Luo, Hongchen and Zhai, Wei and Cao, Yang and Kang, Yu},
    journal={IEEE Transactions on Artificial Intelligence},
    year={2024},
    publisher={IEEE}
    }`
  },

  {
    id: "yang2023lemon",
    title: "LEMON: Learning 3D Human-Object Interaction Relation from 2D Images",
    authors: [
      "Yuhang Yang",
      corresponding("Wei Zhai"),
      "Hongchen Luo",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    selected: true,
    venue: "In CVPR 2024",
    description: "Recovers 3D human-object interaction relations from a single 2D image, lifting static visual evidence into interaction-aware geometry instead of stopping at appearance recognition.",
    image: "yang2023lemon.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2024/papers/Yang_LEMON_Learning_3D_Human-Object_Interaction_Relation_from_2D_Images_CVPR_2024_paper.pdf",
      code: "https://github.com/yyvhang/lemon_3d"
    },
    starRepos: {
      code: "yyvhang/lemon_3d"
    },
    bibtex: `@inproceedings{yang2024lemon,
    title={LEMON: Learning 3D Human-Object Interaction Relation from 2D Images},
    author={Yang, Yuhang and Zhai, Wei and Luo, Hongchen and Cao, Yang and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={16284--16295},
    year={2024}
    }`
  },

  {
    id: "wang2024mambapupil",
    title: "Mambapupil: Bidirectional Selective Recurrent Model for Event-based Eye Tracking",
    authors: [
      "Zhong Wang",
      "Zengyu Wan",
      "Han Han",
      "Bohao Liao",
      "Yuliang Wu",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2024,
    rating: "1st place challenge",
    venue: "In CVPR 2024 Workshop",
    image: "wang2024mambapupil.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2024W/AI4Streaming/papers/Wang_MambaPupil_Bidirectional_Selective_Recurrent_Model_for_Event-based_Eye_Tracking_CVPRW_2024_paper.pdf"
    },
    bibtex: `@inproceedings{wang2024mambapupil,
    title={Mambapupil: Bidirectional selective recurrent model for event-based eye tracking},
    author={Wang, Zhong and Wan, Zengyu and Han, Han and Liao, Bohao and Wu, Yuliang and Zhai, Wei and Cao, Yang and Zha, Zheng-jun},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={5762--5770},
    year={2024}
    }`
  },

  {
    id: "liang2023hypercorrelation",
    title: "Hypercorrelation Evolution for Video Class-Incremental Learning",
    authors: [
      "Sen Liang",
      corresponding("Kai Zhu"),
      "Zhiheng Liu",
      corresponding("Wei Zhai"),
      "Yang Cao"
    ],
    year: 2024,
    venue: "In AAAI 2024",
    image: "liang2023hypercorrelation.png",
    links: {
      pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/28117/28238"
    },
    bibtex: `@inproceedings{liang2024hypercorrelation,
    title={Hypercorrelation Evolution for Video Class-Incremental Learning},
    author={Liang, Sen and Zhu, Kai and Zhai, Wei and Liu, Zhiheng and Cao, Yang},
    booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
    volume={38},
    number={4},
    pages={3315--3323},
    year={2024}
    }`
  },

  {
    id: "luo2022grounded",
    title: "Grounded Affordance from Exocentric View",
    authors: [
      "Hongchen Luo",
      "Wei Zhai",
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2023,
    venue: "In International Journal of Computer Vision (IJCV)",
    venueNote: "Journal version of \"Learning Affordance Grounding from Exocentric Images\" (CVPR 2022)",
    image: "luo2022grounded.png",
    links: {
      pdf: "https://link.springer.com/article/10.1007/s11263-023-01962-z",
      code: "https://github.com/lhc1224/Cross-View-AG"
    },
    starRepos: {
      code: "lhc1224/Cross-View-AG"
    },
    bibtex: `@article{luo2024grounded,
    title={Grounded affordance from exocentric view},
    author={Luo, Hongchen and Zhai, Wei and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    journal={International Journal of Computer Vision},
    volume={132},
    number={6},
    pages={1945--1969},
    year={2024},
    publisher={Springer}
    }`
  },

  {
    id: "zhai2021on",
    title: "On Exploring Multiplicity of Primitives and Attributes for Texture Recognition in the Wild",
    authors: [
      "Wei Zhai",
      "Yang Cao",
      "Jing Zhang",
      "Haiyong Xie",
      "Dacheng Tao",
      "Zheng-Jun Zha"
    ],
    year: 2023,
    venue: "In IEEE T-PAMI",
    venueNote: "Journal version of MPAP (ICCV 2019) and DSR-Net (CVPR 2020)",
    image: "zhai2021on.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/10286884/",
      code: "https://github.com/tiaotiao11-22/MPAP"
    },
    bibtex: `@article{zhai2023exploring,
    title={On exploring multiplicity of primitives and attributes for texture recognition in the wild},
    author={Zhai, Wei and Cao, Yang and Zhang, Jing and Xie, Haiyong and Tao, Dacheng and Zha, Zheng-Jun},
    journal={IEEE Transactions on Pattern Analysis and Machine Intelligence},
    year={2023},
    publisher={IEEE}
    }`
  },

  {
    id: "zhai2022background",
    title: "Background Activation Suppression for Weakly Supervised Object Localization and Semantic Segmentation",
    authors: [
      "Wei Zhai",
      "Pingyu Wu",
      "Kai Zhu",
      "Yang Cao",
      "Feng Wu",
      "Zheng-Jun Zha"
    ],
    year: 2023,
    venue: "In International Journal of Computer Vision (IJCV)",
    venueNote: "Journal version of BAS (CVPR 2022)",
    image: "zhai2022background.png",
    links: {
      pdf: "https://link.springer.com/article/10.1007/s11263-023-01919-2",
      code: "https://github.com/wpy1999/BAS-Extension"
    },
    bibtex: `@article{zhai2024background,
    title={Background activation suppression for weakly supervised object localization and semantic segmentation},
    author={Zhai, Wei and Wu, Pingyu and Zhu, Kai and Cao, Yang and Wu, Feng and Zha, Zheng-Jun},
    journal={International Journal of Computer Vision},
    volume={132},
    number={3},
    pages={750--775},
    year={2024},
    publisher={Springer}
    }`
  },

  {
    id: "luo2021learning",
    title: "Learning Visual Affordance Grounding from Demonstration Videos",
    authors: [
      "Hongchen Luo",
      "Wei Zhai",
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2023,
    venue: "In IEEE T-NNLS",
    image: "luo2021learning.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/10246333/",
      code: "https://github.com/lhc1224/HAG-Net"
    },
    bibtex: `@article{luo2023learning,
    title={Learning visual affordance grounding from demonstration videos},
    author={Luo, Hongchen and Zhai, Wei and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    journal={IEEE Transactions on Neural Networks and Learning Systems},
    year={2023},
    publisher={IEEE}
    }`
  },

  {
    id: "wu2023spatial",
    title: "Spatial-Aware Token for Weakly Supervised Object Localization",
    authors: [
      "Pingyu Wu",
      corresponding("Wei Zhai"),
      "Yang Cao",
      "Jiebo Luo",
      "Zheng-Jun Zha"
    ],
    year: 2023,
    venue: "In ICCV 2023",
    image: "wu2023spatial.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/ICCV2023/papers/Wu_Spatial-Aware_Token_for_Weakly_Supervised_Object_Localization_ICCV_2023_paper.pdf",
      code: "https://github.com/wpy1999/SAT"
    },
    bibtex: `@inproceedings{wu2023spatial,
    title={Spatial-aware token for weakly supervised object localization},
    author={Wu, Pingyu and Zhai, Wei and Cao, Yang and Luo, Jiebo and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    pages={1844--1854},
    year={2023}
    }`
  },

  {
    id: "yang2023grounding",
    title: "Grounding 3D Object Affordance from 2D Interactions in Images",
    authors: [
      "Yuhang Yang",
      corresponding("Wei Zhai"),
      "Hongchen Luo",
      "Yang Cao",
      "Jiebo Luo",
      "Zheng-Jun Zha"
    ],
    year: 2023,
    selected: true,
    venue: "In ICCV 2023",
    description: "Grounds 3D object affordance directly from 2D interaction evidence, connecting visible human-object contacts in images to functional regions in underlying 3D space.",
    image: "yang2023grounding.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/ICCV2023/papers/Yang_Grounding_3D_Object_Affordance_from_2D_Interactions_in_Images_ICCV_2023_paper.pdf",
      code: "https://github.com/yyvhang/IAGNet"
    },
    starRepos: {
      code: "yyvhang/IAGNet"
    },
    bibtex: `@inproceedings{yang2023grounding,
    title={Grounding 3d object affordance from 2d interactions in images},
    author={Yang, Yuhang and Zhai, Wei and Luo, Hongchen and Cao, Yang and Luo, Jiebo and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    pages={10905--10915},
    year={2023}
    }`
  },

  {
    id: "wang2023robustness",
    title: "Robustness Benchmark for Unsupervised Anomaly Detection Models",
    authors: [
      "Pei Wang",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2023,
    venue: "In Journal of University of Science and Technology of China (JUSTC)",
    image: "wang2023robustness.png",
    links: {
      pdf: "https://just.ustc.edu.cn/en/article/doi/10.52396/JUSTC-2022-0165"
    },
    bibtex: `@article{wang2024robustness,
    title={Robustness benchmark for unsupervised anomaly detection models},
    author={Wang, Pei and Zhai, Wei and Cao, Yang},
    journal={JUSTC},
    volume={54},
    number={1},
    pages={0103--1},
    year={2024},
    publisher={JUSTC}
    }`
  },

  {
    id: "luo2023leverage",
    title: "Leverage Interactive Affinity for Affordance Learning",
    authors: [
      coFirst("Hongchen Luo"),
      coFirst("Wei Zhai"),
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2023,
    venue: "In CVPR 2023",
    image: "luo2023leverage.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2023/papers/Luo_Leverage_Interactive_Affinity_for_Affordance_Learning_CVPR_2023_paper.pdf",
      code: "https://github.com/lhc1224/PIAL-Net"
    },
    bibtex: `@inproceedings{luo2023leverage,
    title={Leverage interactive affinity for affordance learning},
    author={Luo, Hongchen and Zhai, Wei and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={6809--6819},
    year={2023}
    }`
  },

  {
    id: "lu2023uncertainty",
    title: "Uncertainty-Aware Optimal Transport for Semantically Coherent Out-of-Distribution Detection",
    authors: [
      "Fan Lu",
      "Kai Zhu",
      "Wei Zhai",
      "Kecheng Zheng",
      "Yang Cao"
    ],
    year: 2023,
    venue: "In CVPR 2023",
    image: "lu2023uncertainty.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2023/papers/Lu_Uncertainty-Aware_Optimal_Transport_for_Semantically_Coherent_Out-of-Distribution_Detection_CVPR_2023_paper.pdf",
      code: "https://github.com/LuFan31/ET-OOD"
    },
    bibtex: `@inproceedings{lu2023uncertainty,
    title={Uncertainty-Aware Optimal Transport for Semantically Coherent Out-of-Distribution Detection},
    author={Lu, Fan and Zhu, Kai and Zhai, Wei and Zheng, Kecheng and Cao, Yang},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={3282--3291},
    year={2023}
    }`
  },

  {
    id: "dong2023exploring",
    title: "Exploring Tuning Characteristics of Ventral Stream's Neurons for Few-Shot Image Classification",
    authors: [
      "Lintao Dong",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2023,
    rating: "oral",
    venue: "In AAAI 2023",
    image: "dong2023exploring.png",
    links: {
      pdf: "https://ojs.aaai.org/index.php/AAAI/article/download/25128/24900"
    },
    bibtex: `@inproceedings{dong2023exploring,
    title={Exploring Tuning Characteristics of Ventral Stream鈥檚 Neurons for Few-Shot Image Classification},
    author={Dong, Lintao and Zhai, Wei and Zha, Zheng-Jun},
    booktitle={Proceedings of the AAAI Conference on Artificial Intelligence},
    volume={37},
    number={1},
    pages={534--542},
    year={2023}
    }`
  },

  {
    id: "zhai2022exploring",
    title: "Exploring Figure-Ground Assignment Mechanism in Perceptual Organization",
    authors: [
      "Wei Zhai",
      "Yang Cao",
      "Jing Zhang",
      "Zheng-Jun Zha"
    ],
    year: 2022,
    venue: "In NeurIPS 2022",
    image: "zhai2022exploring.png",
    links: {
      pdf: "https://proceedings.neurips.cc/paper_files/paper/2022/file/6cc31b44d88dce8380d36e81485cd07f-Paper-Conference.pdf"
    },
    bibtex: `@article{zhai2022exploring,
    title={Exploring figure-ground assignment mechanism in perceptual organization},
    author={Zhai, Wei and Cao, Yang and Zhang, Jing and Zha, Zheng-Jun},
    journal={Advances in Neural Information Processing Systems},
    volume={35},
    pages={17030--17042},
    year={2022}
    }`
  },

  {
    id: "lu2022phrase",
    title: "Phrase-Based Affordance Detection via Cyclic Bilateral Interaction",
    authors: [
      coFirst("Liangsheng Lu"),
      coFirst("Wei Zhai"),
      "Hongchen Luo",
      "Kang Yu",
      "Yang Cao"
    ],
    year: 2022,
    venue: "In IEEE T-AI",
    image: "lu2022phrase.png",
    links: {
      pdf: "https://proceedings.neurips.cc/paper_files/paper/2022/file/6cc31b44d88dce8380d36e81485cd07f-Paper-Conference.pdf",
      code: "https://github.com/lulsheng/CBCE-Net"
    }
  },

  {
    id: "zhai2022one",
    title: "One-Shot Affordance Detection in the Wild",
    authors: [
      coFirst("Wei Zhai"),
      coFirst("Hongchen Luo"),
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2022,
    venue: "In International Journal of Computer Vision (IJCV)",
    venueNote: "Journal version of \"One-Shot Affordance Detection\" (IJCAI 2021)",
    image: "zhai2022one.png",
    links: {
      pdf: "https://link.springer.com/article/10.1007/s11263-022-01642-4",
      code: "https://github.com/lhc1224/OSAD_Net"
    },
    starRepos: {
      code: "lhc1224/OSAD_Net"
    },
    bibtex: `@article{zhai2022one,
    title={One-shot object affordance detection in the wild},
    author={Zhai, Wei and Luo, Hongchen and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    journal={International Journal of Computer Vision},
    volume={130},
    number={10},
    pages={2472--2500},
    year={2022},
    publisher={Springer}
    }`
  },

  {
    id: "zhai2022deep",
    title: "Deep Texton-Coherence Network for Camouflaged Object Detection",
    authors: [
      "Wei Zhai",
      "Yang Cao",
      "Haiyong Xie",
      "Zheng-Jun Zha"
    ],
    year: 2022,
    venue: "In IEEE T-MM",
    image: "zhai2022deep.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/9815160"
    },
    bibtex: `@article{zhai2022deep,
    title={Deep texton-coherence network for camouflaged object detection},
    author={Zhai, Wei and Cao, Yang and Xie, HaiYong and Zha, Zheng-Jun},
    journal={IEEE Transactions on Multimedia},
    year={2022},
    publisher={IEEE}
    }`
  },

  {
    id: "li2022location",
    title: "Location-Free Camouflage Generation Network",
    authors: [
      coFirst("Yangyang Li"),
      coFirst("Wei Zhai"),
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2022,
    venue: "In IEEE T-MM",
    image: "li2022location.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/9817812",
      code: "https://github.com/Tale17/LCG-Net"
    },
    bibtex: `@article{li2022location,
    title={Location-free camouflage generation network},
    author={Li, Yangyang and Zhai, Wei and Cao, Yang and Zha, Zheng-jun},
    journal={IEEE Transactions on Multimedia},
    year={2022},
    publisher={IEEE}
    }`
  },

  {
    id: "luo2022learning",
    title: "Learning Affordance Grounding from Exocentric Images",
    authors: [
      coFirst("Hongchen Luo"),
      coFirst("Wei Zhai"),
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2022,
    selected: true,
    venue: "In CVPR 2022",
    description: "Learns affordance grounding from exocentric interactions through cross-view transfer, backed by AGD20K and a formulation that links observed usage patterns to object functionality.",
    image: "luo2022learning.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2022/papers/Luo_Learning_Affordance_Grounding_From_Exocentric_Images_CVPR_2022_paper.pdf",
      code: "https://github.com/lhc1224/Cross-View-AG"
    },
    starRepos: {
      code: "lhc1224/Cross-View-AG"
    },
    bibtex: `@inproceedings{luo2022learning,
    title={Learning affordance grounding from exocentric images},
    author={Luo, Hongchen and Zhai, Wei and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={2252--2261},
    year={2022}
    }`
  },

  {
    id: "wu2022background",
    title: "Background Activation Suppression for Weakly Supervised Object Localization",
    authors: [
      coFirst("Pingyu Wu"),
      coFirst("Wei Zhai"),
      "Yang Cao"
    ],
    year: 2022,
    venue: "In CVPR 2022",
    image: "wu2022background.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2022/papers/Wu_Background_Activation_Suppression_for_Weakly_Supervised_Object_Localization_CVPR_2022_paper.pdf",
      code: "https://github.com/wpy1999/BAS"
    },
    starRepos: {
      code: "wpy1999/BAS"
    },
    bibtex: `@inproceedings{wu2022background,
    title={Background activation suppression for weakly supervised object localization},
    author={Wu, Pingyu and Zhai, Wei and Cao, Yang},
    booktitle={2022 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    pages={14228--14237},
    year={2022},
    organization={IEEE}
    }`
  },

  {
    id: "zhu2022self",
    title: "Self-Sustaining Representation Expansion for Non-Exemplar Class-Incremental Learnings",
    authors: [
      "Kai Zhu",
      "Wei Zhai",
      "Yang Cao",
      "Jiebo Luo",
      "Zheng-Jun Zha"
    ],
    year: 2022,
    venue: "In CVPR 2022",
    image: "zhu2022self.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2022/papers/Zhu_Self-Sustaining_Representation_Expansion_for_Non-Exemplar_Class-Incremental_Learning_CVPR_2022_paper.pdf",
      code: "https://github.com/zhukaii/SSRE"
    },
    bibtex: `@inproceedings{zhu2022self,
    title={Self-sustaining representation expansion for non-exemplar class-incremental learning},
    author={Zhu, Kai and Zhai, Wei and Cao, Yang and Luo, Jiebo and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={9296--9305},
    year={2022}
    }`
  },

  {
    id: "wang2022robust",
    title: "Robust Object Detection via Adversarial Novel Style Exploration",
    authors: [
      "Wen Wang",
      "Jing Zhang",
      "Wei Zhai",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2022,
    venue: "In IEEE T-IP",
    image: "wang2022robust.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/9697984"
    },
    bibtex: `@article{wang2022robust,
    title={Robust object detection via adversarial novel style exploration},
    author={Wang, Wen and Zhang, Jing and Zhai, Wei and Cao, Yang and Tao, Dacheng},
    journal={IEEE Transactions on Image Processing},
    volume={31},
    pages={1949--1962},
    year={2022},
    publisher={IEEE}
    }`
  },

  {
    id: "luo2021one",
    title: "One-Shot Affordance Detection",
    authors: [
      "Hongchen Luo",
      "Wei Zhai",
      "Jing Zhang",
      "Yang Cao",
      "Dacheng Tao"
    ],
    year: 2021,
    rating: "oral",
    venue: "In IJCAI 2021",
    image: "luo2021one.png",
    links: {
      pdf: "https://www.ijcai.org/proceedings/2021/0124.pdf",
      code: "https://github.com/lhc1224/OSAD_Net"
    },
    starRepos: {
      code: "lhc1224/OSAD_Net"
    },
    bibtex: `@article{luo2021one,
    title={One-shot affordance detection},
    author={Luo, Hongchen and Zhai, Wei and Zhang, Jing and Cao, Yang and Tao, Dacheng},
    journal={arXiv preprint arXiv:2106.14747},
    year={2021}
    }`
  },

  {
    id: "li2021tri",
    title: "A Tri-Attention Enhanced Graph Convolutional Network for Skeleton-Based Action Recognition",
    authors: [
      "Xingming Li",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2021,
    venue: "In IET Computer Vision (IET-CV 2021)",
    image: "li2021tri.png",
    links: {
      pdf: "https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/cvi2.12017"
    },
    bibtex: `@article{li2021tri,
    title={A tri-attention enhanced graph convolutional network for skeleton-based action recognition},
    author={Li, Xingming and Zhai, Wei and Cao, Yang},
    journal={IET Computer Vision},
    volume={15},
    number={2},
    pages={110--121},
    year={2021},
    publisher={Wiley Online Library}
    }`
  },

  {
    id: "zhu2021self",
    title: "Self-Promoted Prototype Refinement for Few-Shot Class-Incremental Learning",
    authors: [
      "Kai Zhu",
      "Yang Cao",
      "Wei Zhai",
      "Jie Cheng",
      "Zheng-Jun Zha"
    ],
    year: 2021,
    venue: "In CVPR 2021",
    image: "zhu2021self.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content/CVPR2021/papers/Zhu_Self-Promoted_Prototype_Refinement_for_Few-Shot_Class-Incremental_Learning_CVPR_2021_paper.pdf",
      code: "https://github.com/zhukaii/SPPR"
    },
    starRepos: {
      code: "zhukaii/SPPR"
    },
    bibtex: `@inproceedings{zhu2021self,
    title={Self-promoted prototype refinement for few-shot class-incremental learning},
    author={Zhu, Kai and Cao, Yang and Zhai, Wei and Cheng, Jie and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF conference on computer vision and pattern recognition},
    pages={6801--6810},
    year={2021}
    }`
  },

  {
    id: "zhu2020self",
    title: "Self-Supervised Tuning for Few-Shot Segmentation",
    authors: [
      "Kai Zhu",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2020,
    rating: "oral",
    venue: "In IJCAI 2020",
    image: "zhu2020self.png",
    links: {
      pdf: "https://www.ijcai.org/proceedings/2020/0142.pdf"
    },
    bibtex: `@inproceedings{zhu2021self,
    title={Self-supervised tuning for few-shot segmentation},
    author={Zhu, Kai and Zhai, Wei and Cao, Yang},
    booktitle={Proceedings of the Twenty-Ninth International Conference on International Joint Conferences on Artificial Intelligence},
    pages={1019--1025},
    year={2021}
    }`
  },

  {
    id: "wang2020deep",
    title: "Deep Inhomogeneous Regularization for Transfer Learning",
    authors: [
      "Wen Wang",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2020,
    venue: "In ICIP 2020",
    image: "wang2020deep.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/9190822"
    },
    bibtex: `@inproceedings{wang2020deep,
    title={Deep inhomogeneous regularization for transfer learning},
    author={Wang, Wen and Zhai, Wei and Cao, Yang},
    booktitle={2020 IEEE International Conference on Image Processing (ICIP)},
    pages={221--225},
    year={2020},
    organization={IEEE}
    }`
  },

  {
    id: "zhai2020deep",
    title: "Deep Structure-Revealed Network for Texture Recognition",
    authors: [
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha",
      "HaiYong Xie",
      "Feng Wu"
    ],
    year: 2020,
    rating: "oral",
    venue: "In CVPR 2020",
    image: "zhai2020deep.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content_CVPR_2020/papers/Zhai_Deep_Structure-Revealed_Network_for_Texture_Recognition_CVPR_2020_paper.pdf"
    },
    bibtex: `@inproceedings{zhai2020deep,
    title={Deep structure-revealed network for texture recognition},
    author={Zhai, Wei and Cao, Yang and Zha, Zheng-Jun and Xie, HaiYong and Wu, Feng},
    booktitle={Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition},
    pages={11010--11019},
    year={2020}
    }`
  },

  {
    id: "zhu2020one",
    title: "One-Shot Texture Retrieval Using Global Grouping Metric",
    authors: [
      "Kai Zhu",
      "Yang Cao",
      "Wei Zhai",
      "Zheng-Jun Zha"
    ],
    year: 2020,
    venue: "In IEEE T-MM 2020",
    venueNote: "Journal version of \"One-Shot Texture Retrieval with Global Context Metric\" (IJCAI 2019)",
    image: "zhu2020one.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/9224176"
    },
    bibtex: `@article{zhu2020one,
    title={One-shot texture retrieval using global grouping metric},
    author={Zhu, Kai and Cao, Yang and Zhai, Wei and Zha, Zheng-Jun},
    journal={IEEE Transactions on Multimedia},
    volume={23},
    pages={3726--3737},
    year={2020},
    publisher={IEEE}
    }`
  },

  {
    id: "zhai2019deep",
    title: "Deep Multiple-Attribute-Perceived Network for Real-World Texture Recognition",
    authors: [
      "Wei Zhai",
      "Yang Cao",
      "Jing Zhang",
      "Zheng-Jun Zha"
    ],
    year: 2019,
    venue: "In ICCV 2019",
    image: "zhai2019deep.png",
    links: {
      pdf: "https://openaccess.thecvf.com/content_ICCV_2019/papers/Zhai_Deep_Multiple-Attribute-Perceived_Network_for_Real-World_Texture_Recognition_ICCV_2019_paper.pdf"
    },
    bibtex: `@inproceedings{zhai2019deep,
    title={Deep multiple-attribute-perceived network for real-world texture recognition},
    author={Zhai, Wei and Cao, Yang and Zhang, Jing and Zha, Zheng-Jun},
    booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
    pages={3613--3622},
    year={2019}
    }`
  },

  {
    id: "zhu2019one",
    title: "One-Shot Texture Retrieval with Global Context Metric",
    authors: [
      "Kai Zhu",
      "Wei Zhai",
      "Zheng-Jun Zha",
      "Yang Cao"
    ],
    year: 2019,
    rating: "oral",
    venue: "In IJCAI 2019",
    image: "zhu2019one.png",
    links: {
      pdf: "https://arxiv.org/pdf/1905.06656.pdf"
    },
    bibtex: `@article{zhu2019one,
    title={One-shot texture retrieval with global context metric},
    author={Zhu, Kai and Zhai, Wei and Zha, Zheng-Jun and Cao, Yang},
    journal={arXiv preprint arXiv:1905.06656},
    year={2019}
    }`
  },

  {
    id: "wu2019pixtextgan",
    title: "PixTextGAN: Structure Aware Text Image Synthesis for License Plate Recognition",
    authors: [
      "Shilian Wu",
      "Wei Zhai",
      "Yang Cao"
    ],
    year: 2019,
    venue: "In IET Image Processing (IET-IP 2019)",
    image: "wu2019pixtextgan.png",
    links: {
      pdf: "https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-ipr.2018.6588"
    },
    bibtex: `@article{wu2019pixtextgan,
    title={PixTextGAN: structure aware text image synthesis for license plate recognition},
    author={Wu, Shilian and Zhai, Wei and Cao, Yang},
    journal={IET Image Processing},
    volume={13},
    number={14},
    pages={2744--2752},
    year={2019},
    publisher={Wiley Online Library}
    }`
  },

  {
    id: "zhai2018generative",
    title: "A Generative Adversarial Network Based Framework for Unsupervised Visual Surface Inspection",
    authors: [
      "Wei Zhai",
      "Jiang Zhu",
      "Yang Cao",
      "Zengfu Wang"
    ],
    year: 2018,
    rating: "oral",
    venue: "In ICASSP 2018",
    image: "zhai2018generative.png",
    links: {
      pdf: "https://ieeexplore.ieee.org/abstract/document/8462364"
    },
    bibtex: `@inproceedings{zhai2018generative,
    title={A generative adversarial network based framework for unsupervised visual surface inspection},
    author={Zhai, Wei and Zhu, Jiang and Cao, Yang and Wang, Zengfu},
    booktitle={2018 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)},
    pages={1283--1287},
    year={2018},
    organization={IEEE}
    }`
  },

  {
    id: "zhu2018co",
    title: "Co-Occurrent Structural Edge Detection for Color-Guided Depth Map Super-Resolution",
    authors: [
      "Jiang Zhu",
      "Wei Zhai",
      "Yang Cao",
      "Zheng-Jun Zha"
    ],
    year: 2018,
    rating: "oral",
    venue: "In MMM 2018",
    image: "zhu2018co.png",
    links: {
      pdf: "https://link.springer.com/content/pdf/10.1007%2F978-3-319-73603-7_8.pdf"
    },
    bibtex: `@inproceedings{zhu2018co,
    title={Co-occurrent structural edge detection for color-guided depth map super-resolution},
    author={Zhu, Jiang and Zhai, Wei and Cao, Yang and Zha, Zheng-Jun},
    booktitle={MultiMedia Modeling: 24th International Conference, MMM 2018, Bangkok, Thailand, February 5-7, 2018, Proceedings, Part I 24},
    pages={93--105},
    year={2018},
    organization={Springer}
    }`
  }
  ]
};




