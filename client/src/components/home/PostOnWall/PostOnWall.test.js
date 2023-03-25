import React from "react";
import { render } from "@testing-library/react";
import PostOnWall from "./PostOnWall";

describe("Test for form", () => {
  it("should render the form", () => {
    const { getByText, getByPlaceholderText } = render(<PostOnWall />);

    expect(getByText("Message")).toBeInTheDocument();
    expect(getByPlaceholderText("Message...")).toBeInTheDocument();
    expect(getByText("Post message")).toBeInTheDocument();
  });
});
