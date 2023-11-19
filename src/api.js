import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
export async function registerReq(name, email, password) {
  return instance
    .post("/signup", {
      name: name,
      email: email,
      password: password,
    })
    .then(function (response) {
      return response.data;
    });
}

export async function loginReq(email, password) {
  return instance
    .post("/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      return response.data;
    });
}

export async function getCurrUserReq() {
  return instance.get("/me").then(function (response) {
    return response.data;
  });
}