import api from "./api";

export const register = async (formData) => {
  const response = await api.post("/register", formData);
  return response.data;
};

export const logIn = async (formData) => {
  const response = await api.post("/login", formData);
  return response.data;
};

export const getRoleByToken = async () => {
  const response = await api.get("/dashBoard");
  return response.data;
};

export const logOut = async () => {
  const response = await api.post("/logout");
  return response.data;
};
