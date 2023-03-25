import axios from "axios";
import { getPosts } from "./messagesAPI";

jest.mock("axios");

describe("getPosts", () => {
  it("should return a list of posts", async () => {
    const mockedPosts = { data: [{ id: 1, title: "Post 1" }] };

    axios.get.mockResolvedValue(mockedPosts);

    const posts = await getPosts();

    expect(posts).toEqual(mockedPosts);
    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
