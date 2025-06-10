const projectsC = {
  selectedProjects: {
    btnText: 'Access',
    projects: [
      {
        title: 'FIAP para empresas',
        bgGradient: 'radial-gradient(at left top, #000F29, #3B0014);',
        textColor: '',
        btnColors: {
          bgColor: 'magenta',
          textColor: 'white'
        },
        btnHref: '',
        scrollDownHref: '',
        imgSrc: './imgs/projects/fiap-para-empresas/desktop.png',
        mobile: {
          imgSrc: './imgs/projects/fiap-para-empresas/mobile.png',
          skills: [
            'Typescript',
            'Next.js',
            'Gsap3'
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium urna quis dolor molestie tristique. Donec vitae molestie orci. Phasellus consequat ornare risus, in lacinia lacus venenatis tincidunt.'
        }
      },
      {
        title: 'FIAP School',
        bgGradient: 'linear-gradient(30deg, rgba(89,68,210,1) 0%, rgba(48,191,225,1) 100%)',
        btnHref: '',
        textColor: '',
        btnColors: {
          bgColor: 'white',
          textColor: 'indigoRainbow'
        },
        scrollDownHref: '',
        imgSrc: './imgs/projects/fiap-school/desktop.png',
        mobile: {
          imgSrc: './imgs/projects/fiap-school/mobile.png',
          skills: [
            'Typescript',
            'Next.js',
            'Gsap3'
          ],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pretium urna quis dolor molestie tristique. Donec vitae molestie orci. Phasellus consequat ornare risus, in lacinia lacus venenatis tincidunt.'
        }
      }
    ]
  }

};

export default projectsC;
