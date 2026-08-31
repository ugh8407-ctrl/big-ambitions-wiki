import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { SiteHeader } from "@/components/site-header";
import { CodesSidebar } from "@/components/codes-sidebar";

describe("site shell", () => {
  it("renders Big Ambitions and the verified empty code state", () => {
    render(<><SiteHeader locale="en" /><CodesSidebar locale="en" /></>);
    expect(screen.getByRole("link", { name: "Big Ambitions Wiki home" })).toBeInTheDocument();
    expect(screen.getByText("None available")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Steam/i })).toHaveAttribute(
      "href",
      "https://store.steampowered.com/app/1331550/Big_Ambitions/",
    );
    expect(screen.getByRole("button", { name: /dark theme/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /language/i })).toBeInTheDocument();
  });
});
