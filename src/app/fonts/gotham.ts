import localFont from 'next/font/local';

export const gotham = localFont({
  variable: '--gotham',
  src: [
    {
      path: './gotham/gotham-htf-light.otf',
      weight: '300',
      style: 'normal'
    },
    {
      path: './gotham/gotham-htf-book.otf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './gotham/gotham-htf-medium.otf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './gotham/gotham-htf-bold.otf',
      weight: '600',
      style: 'normal'
    }
  ],
  display: 'swap'
});
