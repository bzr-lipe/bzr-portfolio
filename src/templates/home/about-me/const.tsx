const aboutMeC = {
  socialMedia: [
    {
      iconSrc: './svgs/about-me/github.svg',
      href: '',
      alt: 'Github'
    },
    {
      iconSrc: './svgs/about-me/linkedin.svg',
      href: '',
      alt: 'LinkedIn'
    },
    {
      iconSrc: './svgs/about-me/instagram.svg',
      href: '',
      alt: 'Instagram'
    },
    {
      iconSrc: './svgs/about-me/twitter.svg',
      href: '',
      alt: 'Twitter'
    }
  ],
  page1: {
    title: [
      'Felipe',
      'Bezerra'
    ],
    subtitle: 'Front-end Developer',
    description: (
      <>
        <span>about</span> I am a developer based in São Paulo, Brazil focused on creating interactive digital experiences on the web, working with brands and industry Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ligula sit amet purus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </>
    ),
    description2: [
      <><span>about</span> I am a developer based in São Paulo, Brazil</>,
      'focused on creating interactive digital experiences',
      'on the web, working with brands and industry Lorem',
      'ipsum dolor sit amet, consectetur adipiscing elit.',
      'Aliquam vel ligula sit amet purus Lorem ipsum dolor',
      'sit amet, consectetur adipiscing elit.'
    ],
    stats: [
      {
        value: 2,
        subtitle: <>YEARS OF <br /> EXPERIENCE</>
      },
      {
        value: 15,
        subtitle: <>PROJECTS <br />COMPLETED</>
      }
    ]
  },
  page2: {
    title: [
      [<>2</>, <>YEARS</>, <>OF</>, <>EXPERIENCE</>],
      [<><span>BUT</span></>, <>DOZENS OF PROJECTS</>],
      [<><span>AND</span></>, <>COUNTLESS HOURS OF STUDY</>]
    ],
    experiences: [
      {
        position: 'Front-end Developer',
        company: 'FIAP',
        skills: [
          'TYPESCRIPT',
          'NEXT.JS',
          'GSAP3',
          'REACT NATIVE',
          'EXPO'
        ],
        description: 'the web, working with brands and industry Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ligula sit amet purus Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dates: 'Dec 2023 - Present'
      },
      {
        position: 'Front-end Intern',
        company: 'FIAP',
        skills: [
          'ANGULAR',
          'NEXT.JS',
          'GSAP3'
        ],
        description: 'the web, working with brands and industry Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ligula sit amet purus Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        dates: 'Mar 2023 - Dec 2023'
      }
    ]
  }
};

export default aboutMeC;
