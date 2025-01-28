import axios from "axios";
import { Todo } from "../models/Todo";

const API_URL = "http://localhost:5000/api/todos";

export const fetchTodos = async (): Promise<Todo[]> => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTodo = async (title: string): Promise<Todo> => {
    const response = await axios.post(API_URL, { title });
    return response.data;
};

export const deleteTodo = async (id: string): Promise<void> => {
    await axios.delete(`${API_URL}/${id}`);
};

export const toggleTodo = async (id: string): Promise<Todo> => {
    const response = await axios.patch(`${API_URL}/${id}`);
    return response.data;
};
