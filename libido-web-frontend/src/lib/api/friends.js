import client from "./client";
import { API } from "../../config";

export const friendList = () => {
  return client.get("http://localhost:3000/data/followFriends.json");
};

export const friendsContent = () => {
  return client.get("http://localhost:3000/data/friendsRoom.json");
};
// export const friendList = (currentOffset = 1) => {
//   return client.get(`${API.baseUrl}users/follows?offset=${Math.abs(currentOffset - 1) * 8}`, {
//     headers: {
//       Authorization: accessToken,
//     },
//   });
// };

// export const friends = (currentOffset = 1) => {
//   return client.get(
//     `${API.baseUrl}rooms/friends?offset=${Math.abs(currentOffset - 1) * 8}`,
//     {
//       headers: {
//         Authorization: accessToken,
//       },
//     }
//   );
// };
