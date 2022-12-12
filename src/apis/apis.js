import axios from "axios";

const instance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop"
});
export const postSignup = async (datas) =>
  await instance
    .post("/auth/signup", datas)
    .then((data) => data)
    .catch((err) => err.response);
export const postSignin = async (datas) =>
  await instance
    .post("/auth/signin", datas)
    .then((data) => {
      localStorage.setItem("access_token", data.data.access_token);
      return data.status;
    })
    .catch((err) => err.response.status);
