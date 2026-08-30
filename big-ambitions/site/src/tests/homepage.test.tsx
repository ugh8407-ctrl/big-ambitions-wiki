import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/home/hero";
import { StartHere } from "@/components/home/start-here";

describe("researched homepage", () => {
  it("uses the approved game identity and four start cards", () => {
    render(<><Hero locale="en" /><StartHere locale="en" /></>);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Business Empire");
    expect(screen.getAllByTestId("start-card")).toHaveLength(4);
    expect(screen.getByText("Beginner Guide")).toBeInTheDocument();
  });
});
