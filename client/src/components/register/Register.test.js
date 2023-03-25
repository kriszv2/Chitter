import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import Register from "./Register";

jest.mock("axios");

describe("Register", () => {
  it("submits a registration form with valid inputs", async () => {
    axios.post.mockResolvedValueOnce({
      data: { message: "Registration successful" },
    });

    const alert = jest.spyOn(window, "alert").mockImplementation(() => {});

    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
  });
});
