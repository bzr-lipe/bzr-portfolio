import gsap from 'gsap';

export const scrollTo = (elementOrId: HTMLElement | string | null, duration = 0.8, ease = 'power2.inOut'): void => {
  let element: HTMLElement | null;

  if (typeof elementOrId === 'string') {
    element = document.getElementById(elementOrId);
  } else {
    element = elementOrId;
  }

  if (!element) {
    return;
  }

  gsap.to(window, {
    scrollTo: {
      y: element
    },
    duration,
    ease
  });
};
