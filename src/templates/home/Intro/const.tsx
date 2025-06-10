const introC = {
  logoSrc: './svgs/intro/apple-logo.svg',
  titleBar: 'bzr-lipe',
  list: [
    {
      title: 'Skills',
      windows: true,
      options: [
        { 
          title: 'Web Development',
          href: ''
        },
        { 
          title: 'Mobile',
          href: ''
        },
        { 
          title: 'Soft Skills',
          href: ''
        }
      ]
    },
    {
      title: 'Sections',
      options: [
        { 
          title: 'Home',
          href: '#header'
        },
        { 
          title: 'About Me',
          href: '#about-me'
        },
        { 
          title: 'Projects',
          href: '#projects'
        },
        { 
          title: 'Contact',
          href: '#contact'
        },
        { 
          title: 'Footer',
          href: ''
        },
      ]
    },
    {
      title: 'Social Medias',
      links: true,
      options: [
        { 
          title: 'LinkedIn',
          href: 'https://www.linkedin.com/in/bzr-lipe/'
        },
        { 
          title: 'GitHub',
          href: 'https://github.com/bzr-lipe'
        },
        { 
          title: 'Twitter',
          href: 'https://x.com/bzr_lipe'
        }
      ]
    }
  ],
  windows: [
    { 
      title: 'Web Development',
      content: (
        <>
          - HTML<br />
          - CSS/SCSS<br />
          - Javascript<br />
          - Typescript<br />
          - ReactJS<br />
          - NextJS <br />
          - GSAP 3<br />
        </>
      )
    },
    { 
      title: 'Mobile',
      content: (
        <>
            - React Native<br />
            - Expo
        </>
      )
    },
    { 
      title: 'Soft Skills',
      content: (
        <>
            - Communication<br />
            - Adaptabilty<br />
            - Creativity<br/>
            - Problem Solving
        </>
      )
    }
  ]
};

export default introC;
