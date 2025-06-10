'use client'

import { gotham } from '../styles/fonts/gotham';
import fontsClassName from '../styles/font';
import GlobalStyles from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";
import StyledComponentsRegistry from "@/lib/registry";
import theme from '@/styles/theme';
import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <html lang="pt-br">
      <body className={fontsClassName} id="body">
        <ThemeProvider theme={theme}>
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