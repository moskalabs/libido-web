import client from "./client";

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
    phone_number,
    nickname,
  });
};

export const check = () => client.get("/api/auth/check");

export const phoneNumber = phoneNumber => {
  const phone_number = phoneNumber;
  client
    .post("http://172.30.1.58:8000/users/sendsms", {
      phone_number,
    })
    .then(res => console.log(res));
};
