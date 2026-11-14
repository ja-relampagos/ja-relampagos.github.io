// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-outreach",
          title: "outreach",
          description: "Below are some of the outreach activities I have taken part in to make science more accessible to everyone!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-meetings",
          title: "meetings",
          description: "conferences, meetings and talks I have participated in, in reverse chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/meetings/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "outreach-institute-of-physics-iop",
          title: 'Institute of Physics (IOP)',
          description: "In 2025, I was the magnetosphere role model for the IOP&#39;s *Mimi&#39;s Big Earth Adventure*, helping to introduce young people to Earth science. [Read more](https://www.iop.org/explore-physics/mimis-big-earth-adventure/rockstars-earth-science)",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/IOP/";
            },},{id: "outreach-lancaster-university",
          title: 'Lancaster University',
          description: "I have contributed to outreach activities with the School of Physics and Astronomy, including a public engagement event during the solar eclipse, where I showed members of the public how to observe the eclipse safely using a telescope.",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/LU/";
            },},{id: "outreach-magnetosphere-ionosphere-solar-terrestrial-mist",
          title: 'Magnetosphere, Ionosphere, Solar-Terrestrial (MIST)',
          description: "Since 2025, I have been the PhD Student Representative for MIST, helping to create a supportive and inclusive environment for PhD students. I run the community&#39;s social media, help organise our monthly online seminars, and contribute to yearly conferences such as Autumn MIST. [Find out more about MIST and what we do.](https://mist.ac.uk/)",
          section: "Outreach",handler: () => {
              window.location.href = "/outreach/MIST/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A.%72%65%6C%61%6D%70%61%67%6F%73@%6C%61%6E%63%61%73%74%65%72.%61%63.%75%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ja-relampagos", "_blank");
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
