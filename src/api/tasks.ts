import axios from "axios";
import { Task } from "../types/task";

const API_URL = "http://localhost:5000/api/tasks"; // TODO: заменить

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTask = async (task: Omit<Task, "id">) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTask = async (task: Task) => {
  await axios.put(`${API_URL}/${task.id}`, task);
};

export const deleteTask = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
