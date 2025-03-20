import type { Metadata } from "next";
import { Mukta } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
});

export const metadata: Metadata = {
  title: "Interior Design",
  description: "Interior home design project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${mukta.variable} font-sans bg-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
