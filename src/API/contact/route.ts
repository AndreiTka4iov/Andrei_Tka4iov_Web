import { notionFunction } from "@/types/notion";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export const contactApi = async ({
  email,
  telegram,
  name,
  message,
}: notionFunction) => {
  const token = process.env.NEXT_PUBLIC_NOTION_KEY;
  const database = process.env.NEXT_PUBLIC_NOTION_PAGE_ID;
  const backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;

  try {
    if (!token || !database)
      throw new Error("Token or page id is not defined");

    const responce = await axios.post(`${backend_url}notion/any-create`, {
      token,
      database,
      email: email,
      telegram: telegram,
      name: name,
      message: message,
    });

    return responce;
  } catch (error) {
    throw new Error("");
  }
};
