import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Umar Bashir Rather | Full Stack Developer",
  description:
    "Hi, I'm Umar Bashir. Welcome to my portfolio, where I share my work in web and software development, including projects and services I offer. Let’s build something great.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${font.className} antialiased h-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
