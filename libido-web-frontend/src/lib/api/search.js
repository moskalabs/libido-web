import client from "./client";
import { API } from "../../config";

export const searchKeyword = keyword =>
  client
    .get(`http://172.30.1.44:8000/contents/search?keyword=${keyword}`)
    .then(res => console.log(res));
