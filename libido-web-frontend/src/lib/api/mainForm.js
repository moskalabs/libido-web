import client from "./client";
import { API } from "../../config";
import { identifyQuerySort } from "../identifyQuerySort";

// 서버에서 받아 온 데이터를 정제해주는 역할 필요(categorySort와 관련되어 분기 처리_title에 들어갈 내용 받아 온 데이터 추가적으로 기입)

// export const content = ({ categorySort }) => {
//   const querySort = identifyQuerySort(categorySort);
//   client.get(`${API.content}${querySort}`);
// };

// export const rooms = ({ categorySort }) => {
//   const querySort = identifyQuerySort(categorySort);
//   client.get(`${API.rooms}${querySort}`);
// };

export const content = categorySort => {
  const querySort = identifyQuerySort(categorySort);

  // return client
  //   .get("http://127.0.0.1:8000/contents?category=popular")
  //   .then(res => console.log(res));
  return client.get(
    `/data/${
      querySort === "customize"
        ? "contentCustomize.json"
        : "contentPopular.json"
    }`
  );
  // .then(res => {
  //   const {
  //     data: { message },
  //   } = res;
  //   return message;
  //   console.log(res);
  // });
};

export const rooms = categorySort => {
  const querySort = identifyQuerySort(categorySort);

  // return client
  //   .get("http://127.0.0.1:8000/contents?category=popular")
  //   .then(res => console.log(res));
  return client.get(
    `/data/${
      querySort === "customize" ? "roomsCustomize.json" : "roomsPopular.json"
    }`
  );
  // .then(res => {
  //   const {
  //     data: { message },
  //   } = res;
  //   return message;
  //   console.log(res);
  // });
};
