import client from "./client";
import { API } from "../../config";

export const login = ({ email, password }) => {
  return client.post("http://15.164.210.185:8000/users/signin", {
    email,
    password,
  });
};

export const register = ({
  email,
  password,
  re_password,
  nickname,
  is_receive_email,
  nation,
}) => {
  return client.post("http://15.164.210.185:8000/users/signup", {
    email,
    nickname,
    password,
    re_password,
    is_receive_email,
    nation,
  });
};

export const check = () => client.get("/api/auth/check");

export const checkInput = ({
  currentCheckInputAPI,
  currentCheckKey,
  currentCheckInputValue,
}) => {
  return client.post(`${API.baseUrl}users/${currentCheckInputAPI}`, {
    [currentCheckKey]: currentCheckInputValue,
  });
};

export const verificationCodeSend = email => {
  return client.post("http://15.164.210.185:8000/users/signupemail", {
    email,
  });
};
