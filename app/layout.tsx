import type { Metadata } from "next";
import { Open_Sans, Poppins, Roboto } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exemplu.ro"),
  title: "Clinica Dentaire Verde | Stomatologie în București",
  description:
    "Clinică stomatologică în București, cu tratamente explicate clar, grijă pentru pacienții anxioși și servicii pentru întreaga familie.",
  openGraph: {
    title: "Clinica Dentaire Verde | Stomatologie în București",
    description:
      "Stomatologie cu răbdare în București, cu tratamente explicate clar și planuri scrise înainte de fiecare procedură.",
    siteName: "Dentaire Verde",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dentaire Verde, stomatologie cu răbdare în București",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinica Dentaire Verde | Stomatologie în București",
    description:
      "Stomatologie cu răbdare în București, cu tratamente explicate clar și planuri scrise înainte de fiecare procedură.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`h-full antialiased ${poppins.variable} ${openSans.variable} ${roboto.variable}`}
    >
      <body className="min-h-full">
        <a href="#top" className="skip-link">
          Sari la conținut
        </a>
        {children}
      </body>
    </html>
  );
}
