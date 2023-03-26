import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home component", () => {
  test("renders posts on the wall", () => {
    const posts = [
      {
        _id: 1,
        message: "First post",
        createdAt: "2022-03-24T09:30:00.000Z",
        username: "User1",
      },
      {
        _id: 2,
        message: "Second post",
        createdAt: "2022-03-23T10:00:00.000Z",
        username: "User2",
      },
    ];

    render(
      <BrowserRouter>
        <Home posts={posts} />
      </BrowserRouter>
    );

    const post1 = screen.getByText("First post");
    const post2 = screen.getByText("Second post");
    const username1 = screen.getByText("User1");
    const username2 = screen.getByText("User2");

    expect(post1).toBeInTheDocument();
    expect(post2).toBeInTheDocument();
    expect(username1).toBeInTheDocument();
    expect(username2).toBeInTheDocument();
  });
});
