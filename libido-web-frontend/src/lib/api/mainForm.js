import client from "./client";
import { API } from "../../config";
import { identifyQuerySort } from "../identifyQuerySort";

const accessToken = localStorage.getItem("access_token");

export const content = ({ sort, currentOffset = 1 }) => {
  const querySort = identifyQuerySort(sort);

  return client.get(
    `${API.baseUrl}contents?category=${querySort}&offset=${
      Math.abs(currentOffset - 1) * 8
    }`,
    {
      headers: {
        Authorization: accessToken,
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
        Authorization: accessToken,
      },
    }
  );
};
