import { BlogModel, ListBlog } from "@/interfaces";
import axios from "axios";
const baseApiUrl = process.env.VUE_APP_API_URL;

type Callbacks<T> = {
  onSuccess: (a: T) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onFailure: (a: any) => void;
};

export const getAllBlog = async (
  page: number,
  limit: number,
  sortBy: string,
  order: string,
  search: string,
  args: Callbacks<ListBlog>
) => {
  try {
    const response = await axios.get<ListBlog>(`${baseApiUrl}/blogs?page=${page}
		&limit=${limit}
		&search=${search}
		&sortBy=${sortBy}
		&order=${order}`);
    const data = response.data;
    args.onSuccess(data);
  } catch (error) {
    // Handle error
    args.onFailure(error);
  }
};

export const getDetailsBlogById = async (
  id: string,
  arg: Callbacks<BlogModel>
) => {
  try {
    const response = await axios.get<BlogModel>(`${baseApiUrl}/blogs/${id}`);
    const data = response.data;
    arg.onSuccess(data);
  } catch (error) {
    // Handle error
    arg.onFailure(error);
  }
};
