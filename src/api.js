import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
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
    })
    .catch(function (error) {
      console.log(error);
    });
}
