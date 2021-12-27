import client from "./client";
import { API } from "../../config";

export const login = ({ email, password }) =>
  client.post("/api/auth/login", { email, password });

export const register = ({
  email,
  password,
  re_password,
  phone_number,
  nickname,
}) => {
  return client.post("http://172.30.1.45:8000/users/signup", {
    email,
    password,
    re_password,
    nickname,
  });
};

export const check = () => client.get("/api/auth/check");

export const checkInput = ({
  currentCheckInputAPI,
  currentCheckKey,
  currentCheckInputValue,
}) => {
  // const regExp =
  //   /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // let checkType;
  // let currentKey;
  // if (regExp.test(checkInputValue)) {
  //   checkType = "emailcheck";
  //   currentKey = "email";
  // } else {
  //   checkType = "nicknamecheck";
  //   currentKey = "nickname";
  // }
  return client.post(`${API.baseUrl}users/${currentCheckInputAPI}`, {
    [currentCheckKey]: currentCheckInputValue,
  });
};
