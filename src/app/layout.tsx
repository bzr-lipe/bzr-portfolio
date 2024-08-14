'use client'

import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { gotham } from './fonts/gotham';
import GlobalStyles from "@/styles/global";
import { GSAPInitializer } from "@/components/atoms/gsap-initializer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={gotham.variable}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <GSAPInitializer />
          <main>{children}</main>
        </ThemeProvider>
        </body>
    </html>
  );
}
