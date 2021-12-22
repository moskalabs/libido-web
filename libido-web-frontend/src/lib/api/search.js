import client from "./client";
import { API } from "../../config";

const checkHasIncode = keyword => {
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  if (keyword.match(check_kor)) {
    const encodeKeyword = encodeURI(keyword);
    return encodeKeyword;
  } else {
    return keyword;
  }
};

export const searchKeyword = keyword => {
  return client.get(
    `${API.baseUrl}contents/search?keyword=${checkHasIncode(keyword)}`
  );
};
