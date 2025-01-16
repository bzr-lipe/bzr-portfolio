'use client'

import { gotham } from './fonts/gotham';
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
      <body className={gotham.variable} id="body">
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