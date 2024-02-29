import { getAllBlog, getDetailsBlogById } from "@/services/blog";
import axios from "axios";

// Mock Axios instance
jest.mock("axios", () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe("blogService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("getAllBlog handles success response", async () => {
    const responseData = {
      /* mock response data */
    };
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    (axios.get as jest.Mock).mockResolvedValue({ data: responseData });

    await getAllBlog(1, 10, "sortBy", "asc", "search", {
      onSuccess,
      onFailure,
    });

    expect(onSuccess).toHaveBeenCalledWith(responseData);
    expect(onFailure).not.toHaveBeenCalled();
  });

  it("getAllBlog handles failure response", async () => {
    const errorMessage = "Failed to fetch blogs";
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getAllBlog(1, 10, "sortBy", "asc", "search", {
      onSuccess,
      onFailure,
    });

    expect(onSuccess).not.toHaveBeenCalled();
    expect(onFailure).toHaveBeenCalledWith(new Error(errorMessage));
  });

  it("getDetailsBlogById handles success response", async () => {
    const responseData = {
      /* mock response data */
    };
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    (axios.get as jest.Mock).mockResolvedValue({ data: responseData });

    await getDetailsBlogById("1", { onSuccess, onFailure });

    expect(onSuccess).toHaveBeenCalledWith(responseData);
    expect(onFailure).not.toHaveBeenCalled();
  });

  it("getDetailsBlogById handles failure response", async () => {
    const errorMessage = "Failed to fetch blog details";
    const onSuccess = jest.fn();
    const onFailure = jest.fn();

    (axios.get as jest.Mock).mockRejectedValue(new Error(errorMessage));

    await getDetailsBlogById("1", { onSuccess, onFailure });

    expect(onSuccess).not.toHaveBeenCalled();
    expect(onFailure).toHaveBeenCalledWith(new Error(errorMessage));
  });
});
