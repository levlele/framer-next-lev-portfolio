import "./styles/globals.css";
import type { Metadata } from "next";
import { Open_Sans, Source_Serif_4 } from "next/font/google";

const open = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open",
  weight: "400",
});

const source_serif_4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Leandro Vilanova",
  description: "UX UI Designer and Frontend Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${open.variable} ${source_serif_4.variable}`}
      // className={`${open.variable} ${source_serif_4.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
