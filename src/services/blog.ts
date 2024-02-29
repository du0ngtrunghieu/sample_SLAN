import { BlogModel, ListBlog } from "@/interfaces";
import axios from "axios";
const baseApiUrl = process.env.VUE_API_URL;

interface ApiResponse<T> {
  data: T;
}

type Callbacks<T> = {
  onSuccess: (a: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFailure: (a: any) => void;
};

export const getAllBlog = async (arg: Callbacks<ListBlog>) => {
  try {
    const response = await axios.get<ApiResponse<ListBlog>>(
      `${baseApiUrl}/blog`
    );
    const data = response.data.data;
    arg.onSuccess(data);
  } catch (error) {
    // Handle error
    arg.onFailure(error);
    console.error(error);
  }
};

export const getDetailsBlogById = async (
  id: string,
  arg: Callbacks<BlogModel>
) => {
  try {
    const response = await axios.get<ApiResponse<BlogModel>>(
      `${baseApiUrl}/blog/${id}`
    );
    const data = response.data.data;
    arg.onSuccess(data);
  } catch (error) {
    // Handle error
    arg.onFailure(error);
    console.error(error);
  }
};
