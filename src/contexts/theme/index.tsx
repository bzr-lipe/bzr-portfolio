import { createContext, FC, ReactNode, useContext, useState } from "react";
import { darkTheme, lightTheme, Theme } from "@/styles/theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { type ThemeContextProps } from "./props";

const DEFAULT_STATE: ThemeContextProps = {
  theme: darkTheme,
  isLight: false,
  switchTheme: () => undefined,
};

const ThemeContext = createContext<ThemeContextProps>(DEFAULT_STATE);

export const ThemeProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>(darkTheme);
  const [isLightMode, setIsLightMode] = useState<boolean>(false);

  const toggleTheme: ThemeContextProps['switchTheme'] = () => {
    setIsLightMode(!isLightMode);
    setThemeMode(isLightMode ? lightTheme : darkTheme);
  };

  return (
    <ThemeContext.Provider value={
      { theme: themeMode, 
        isLight: isLightMode,
        switchTheme: toggleTheme
      }}
      >
        <StyledThemeProvider theme={isLightMode ? lightTheme : darkTheme}>
          {children}
        </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
