import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  style: 'normal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kodeneko - Web | Mobile | Front-end",
  description: "Kodeneko personal page. A web, mobile and front-end developer. ",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout