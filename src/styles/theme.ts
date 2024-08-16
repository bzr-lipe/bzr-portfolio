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

export const darkTheme = {
  backgroundColor: colors.blueYankees,
  textColor: colors.white,
  primaryColor: colors.purpleMedium,
  secondaryColor: colors.indigoRainbow,
  navBackgroundColor: colors.whiteSemiTransparent,
  navTextColor: colors.black,
  navBorderColor: colors.whiteHalf,
  menuMobileActiveTextColor: colors.white,
  menuMobileBackgroundColor: colors.indigoRainbow,
};

export const lightTheme = {
  backgroundColor: colors.white,
  textColor: colors.black,
  primaryColor: colors.black,
  secondaryColor: colors.purpleMedium,
  navBackgroundColor: colors.blackSemiTransparent,
  navTextColor: colors.white,
  navBorderColor: colors.blackHalf,
  menuMobileActiveTextColor: colors.white,
  menuMobileBackgroundColor: colors.black,
};


export type ColorFamily = keyof typeof colors;
export type Theme = typeof darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
