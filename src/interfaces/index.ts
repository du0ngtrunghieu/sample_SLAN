export type ListBlog = BlogModel[];

export interface BlogModel {
  createdAt: string;
  title: string;
  image: string;
  content?: string;
  id: string;
  body?: Body;
  query?: string;
  params?: Params;
  data?: Data;
}

export interface Body {
  title: string;
  image: string;
  content: string;
}

export interface Params {
  title?: string;
  content?: string;
  createdAt?: string;
  payload?: Payload;
}

export interface Payload {
  title: string;
  content: string;
  createdAt: string;
}

export interface Data {
  title: string;
  content: string;
  image?: string;
}
