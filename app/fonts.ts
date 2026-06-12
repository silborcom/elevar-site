import localFont from "next/font/local";

export const archivoBlack = localFont({
  src: "./fonts/archivo-black-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  display: "swap",
  variable: "--font-archivo-black",
});

export const archivo = localFont({
  src: "./fonts/archivo-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  variable: "--font-archivo",
});

export const plexMono = localFont({
  src: [
    {
      path: "./fonts/ibm-plex-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ibm-plex-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-plex-mono",
});
