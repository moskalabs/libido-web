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

export const content = ({ sort, currentOffset = 1 }) => {
  const querySort = identifyQuerySort(sort);
  console.log(currentOffset);
  return client.get(
    `http://15.164.210.185:8000/contents?category=${querySort}&offset=${
      Math.abs(currentOffset - 1) * 8
    }`,
    {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
      },
    }
  );
  // return client.get(
  //   `/data/${
  //     querySort === "customize"
  //       ? "contentCustomize.json"
  //       : "contentPopular.json"
  //   }`
  // );
};

export const rooms = ({ sort, currentOffset = 1 }) => {
  const querySort = identifyQuerySort(sort);
  // console.log(currentOffset);
  return client.get(
    `http://15.164.210.185:8000/rooms?category=${querySort}&offset=${
      Math.abs(currentOffset - 1) * 8
    }`,
    {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
      },
    }
  );
  // return client.get(
  //   `/data/${
  //     querySort === "customize" ? "roomsCustomize.json" : "roomsPopular.json"
  //   }`
  // );
};

export const friendList = () => {
  // return client.get("/data/followFriends.json");
  return client.get("http://15.164.210.185:8000/users/follows", {
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
    },
  });
};

export const friends = (currentOffset = 1) => {
  // return client.get("/data/friendsRoom.json");

  return client.get(
    `http://15.164.210.185:8000/rooms/friends?offset=${
      Math.abs(currentOffset - 1) * 8
    }`,
    {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
      },
    }
  );
};
