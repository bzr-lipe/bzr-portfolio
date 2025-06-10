import localFont from 'next/font/local';

export const sfPro = localFont({
  variable: '--sf-pro',
  src: [
    {
      path: './sf-pro/SFProDisplay-Ultralight.ttf',
      weight: '100',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Thin.ttf',
      weight: '200',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Black.ttf',
      weight: '800',
      style: 'normal'
    },
    {
      path: './sf-pro/SFProDisplay-Heavy.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap'
});

export default sfPro;