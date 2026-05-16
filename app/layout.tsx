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
  metadataBase: new URL("https://dentaireverde.ro"),
  title: "Clinica Dentaire Verde | Stomatologie in Bucuresti",
  description:
    "Clinica stomatologica fictiva din Bucuresti, cu tratamente explicate clar, grija pentru pacienti anxiosi si servicii pentru intreaga familie.",
  openGraph: {
    title: "Clinica Dentaire Verde | Stomatologie in Bucuresti",
    description:
      "Stomatologie cu rabdare in Bucuresti, intr-un demo de portofoliu cu tratamente explicate clar.",
    siteName: "Dentaire Verde",
    locale: "ro_RO",
    type: "website",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dentaire Verde, stomatologie cu rabdare in Bucuresti",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinica Dentaire Verde | Stomatologie in Bucuresti",
    description:
      "Stomatologie cu rabdare in Bucuresti, intr-un demo de portofoliu cu tratamente explicate clar.",
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
          Sari la continut
        </a>
        {children}
      </body>
    </html>
  );
}
