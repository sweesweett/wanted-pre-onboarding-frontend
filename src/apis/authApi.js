import axios from "axios";
const AuthInstance = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
});
AuthInstance.interceptors.request.use(function (config) {
  let token = localStorage.getItem("access_token");
  config.headers["Authorization"] = "Bearer " + token;
  return config;
});

export const postTodo = async (datas) =>
  await AuthInstance.post("/todos", datas)
    .then((data) => data)
    .catch((err) => err.response);

export const getTodo = async () =>
  await AuthInstance.get("/todos")
    .then((data) => data)
    .catch((err) => err.response);

export const putTodo = async (datas) =>
  await AuthInstance.put(`/todos/${datas.id}`, {
    todo: datas.todo,
    isCompleted: datas.isCompleted,
  })
    .then((data) => data)
    .catch((err) => err.response);
export const deleteTodo = async (id) =>
  await AuthInstance.delete(`/todos/${id}`, "")
    .then((data) => data)
    .catch((err) => err.response);
