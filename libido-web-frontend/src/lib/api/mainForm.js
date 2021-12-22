import client from "./client";
import { API } from "../../config";
import { identifyQuerySort } from "../identifyQuerySort";

export const content = ({ sort, currentOffset = 1 }) => {
  const querySort = identifyQuerySort(sort);

  return client.get(
    `${API.baseUrl}contents?category=${querySort}&offset=${
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

export const rooms = ({ sort, currentOffset = 1 }) => {
  const querySort = identifyQuerySort(sort);

  return client.get(
    `${API.baseUrl}rooms?category=${querySort}&offset=${
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

export const friendList = () => {
  return client.get(`${API.baseUrl}users/follows`, {
    headers: {
      Authorization:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
    },
  });
};

export const friends = (currentOffset = 1) => {
  return client.get(
    `${API.baseUrl}rooms/friends?offset=${Math.abs(currentOffset - 1) * 8}`,
    {
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDF9.P5mvM9ULQ6qiuBL10ld6ZmilB349CHKfBc32gdzXqL4",
      },
    }
  );
};
