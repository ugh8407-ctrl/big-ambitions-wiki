import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { siteOrigin } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Big Ambitions Wiki",
  description: "Independent Big Ambitions guides built from verified official and community research.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZMSC1YNZS" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EZMSC1YNZS');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
