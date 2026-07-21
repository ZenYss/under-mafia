import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "UNDER MAF!A | Premium Digital Store",

  description:
    "UNDER MAF!A - cyfrowa marka oferująca wysokiej jakości produkty premium.",

  keywords: [
    "UNDER MAF!A",
    "premium store",
    "digital products",
  ],

  icons: {
    icon: "/favicon.ico",
  },

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (

    <html lang="pl">

      <body>

        {children}

      </body>

    </html>

  );

}