'use client'

import { gotham } from './fonts/gotham';
import GlobalStyles from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "@/contexts/theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={gotham.variable}>
        <ThemeProvider>
            <GlobalStyles />
            <GSAPInitializer />
            <StyledComponentsRegistry>
                {children}
            </StyledComponentsRegistry>
        </ThemeProvider>
        </body>
    </html>
  );
}