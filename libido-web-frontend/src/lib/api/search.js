import client from "./client";
import { API } from "../../config";

export const searchKeyword = keyword => {
  return client.get(
    `http://15.164.210.185:8000/contents/search?keyword=${keyword}`
  );
};
