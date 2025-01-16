import 'styled-components';

export const colors = {
    black: "#000",
    blackSemiTransparent: "rgba(0, 0, 0, 0.3)",
    blackHalf: "rgba(0, 0, 0, 0.5)",
    blueYankees: "#17153B",
    indigoRainbow: "#2E236C",
    violetTropical: "#C8ACD6",
    purpleMedium: "#9575DE",
    white: "#fff",
    whiteHalf: "rgba(255, 255, 255, 0.5)",
    whiteSemiTransparent: "rgba(255, 255, 255, 0.3)",
    gray: "#DFDFDF",
    grayLight: "#BABABA",
    transparent: "rgba(255, 255, 255, 0)"
};

export default colors;

export type ColorFamily = keyof typeof colors;
type Theme = typeof colors;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
