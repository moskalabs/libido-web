import client from "./client";
import { API } from "../../config";

export const searchKeyword = keyword => {
  return client.get(`http://127.0.0.1:8000/contents/search?keyword=${keyword}`);
};
