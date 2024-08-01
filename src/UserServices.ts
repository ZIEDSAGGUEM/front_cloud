// src/UserService.ts
import axios from "axios";

const API_URL = "https://red-sea-9e1c.ziedsagguem.workers.dev";

export interface User {
  id?: number;
  name: string;
  email: string;
  address: string;
}

export const getUsers = () => axios.get<User[]>(`${API_URL}`);
export const createUser = (user: User) => axios.post(`${API_URL}/add`, user);
export const deleteUser = (id: number) =>
  axios.delete(`${API_URL}/delete/${id}`);
export const updateUser = (id: number, user: User) =>
  axios.put(`${API_URL}/update/${id}`, user);
