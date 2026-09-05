import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import RootLayout from "@/app/layout";

describe("Google Analytics", () => {
  it("loads the Big Ambitions GA4 tag once for every page", () => {
    const markup = renderToStaticMarkup(<RootLayout><main>Page</main></RootLayout>);
    const loader = markup.match(/googletagmanager\.com\/gtag\/js\?id=G-EZMSC1YNZS/g) ?? [];
    const config = markup.match(/gtag\('config', 'G-EZMSC1YNZS'\)/g) ?? [];

    expect(loader).toHaveLength(1);
    expect(config).toHaveLength(1);
  });
});
