import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("Login component", () => {
  test("renders login form", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const usernameInput = screen.getByPlaceholderText("Username...");
    const passwordInput = screen.getByPlaceholderText("Password...");
    const loginButton = screen.getByRole("login-button");
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });
});
