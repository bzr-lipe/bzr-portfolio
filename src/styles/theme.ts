import 'styled-components';

export const theme = {
  colors: {
    black: "#000",
    blueYankees: "#17153B",
    indigoRainbow: "#2E236C",
    violetTropical: "#C8ACD6",
    purpleMedium: "#9575DE",
    white: "#fff",
    whiteHalf: "rgba(255, 255, 255, 0.5)",
    whiteSemiTransparent: "rgba(255, 255, 255, 0.3)",
    gray: "#DFDFDF",
    grayLight: "#BABABA",
    transparent: "rgba(255, 255, 255, 0)",
  },
};

// export const colors = {
//     black: "#000",
//     blueYankees: "#17153B",
//     indigoRainbow: "#2E236C",
//     violetTropical: "#C8ACD6",
//     purpleMedium: "#9575DE",
//     white: "#fff",
//     whiteHalf: "rgba(255, 255, 255, 0.5)",
//     whiteSemiTransparent: "rgba(255, 255, 255, 0.3)",
//     gray: "#DFDFDF",
//     grayLight: "#BABABA",
//     transparent: "rgba(255, 255, 255, 0)"
// };

// export const darkTheme = {
//   backgroundColor: colors.blueYankees,

// };


export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
