
import { type Theme } from "@/styles/theme";

export interface ThemeContextProps {
  theme: Theme;
  isLight: boolean;
  switchTheme: () => void;
}
