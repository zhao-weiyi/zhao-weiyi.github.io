// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-weiyi-zhao",
    title: "Weiyi Zhao",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-asymmetric-cross-side-network-effects-on-financial-platforms-received-first-prize-for-outstanding-paper-at-the-2024-china-tech-fin-research-conference",
          title: '“Asymmetric Cross-side Network Effects on Financial Platforms” received First Prize for Outstanding Paper...',
          description: "",
          section: "News",},{id: "news-new-nsfc-grant-on-platform-token-risk-spillovers",
          title: 'New NSFC Grant on Platform Token Risk Spillovers',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-12-01-nsfc-grant/";
            },},{id: "projects-cornell-deft-lab-collaborations",
          title: 'Cornell DEFT Lab Collaborations',
          description: "Joint research with Cornell&#39;s Digital Economy and Financial Technology Lab on cross-border financing and marketplace design.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deft-lab/";
            },},{id: "projects-machine-learning-amp-quantitative-investment",
          title: 'Machine Learning &amp;amp; Quantitative Investment',
          description: "Graduate course launching at ZUEL to connect modern ML methods with institutional investing.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ml-quant-course/";
            },},{id: "projects-tokenomics-and-risk-spillovers",
          title: 'Tokenomics and Risk Spillovers',
          description: "National Natural Science Foundation project investigating how platform tokens transmit risk into traditional markets.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/tokenomics-risk/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/weiyi_zhao_cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%77%65%69%79%69_%7A%68%61%6F@%7A%75%65%6C.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=N5HhtJYAAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
