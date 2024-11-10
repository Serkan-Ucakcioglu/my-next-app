"use client";

import { useTodosStore } from "@/store/todos";

const headers = { "Content-Type": "application/json" };
const addTodo = useTodosStore.getState().addTodo;

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const postAPI = async (URL, body, method = "POST") => {
  try {
    if (!URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`${apiUrl}/${URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
      mode: "no-cors",
    });
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};

const getAPI = async (URL) => {
  try {
    const res = await fetch(`${apiUrl}/${URL}`, {
      method: "GET",
      headers: headers,
      cache: "no-store",
      mode: "no-cors",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const putAPI = async (URL, id, body, method = "PUT") => {
  try {
    if (!URL && !id) {
      throw new Error("URL veya id bulunamadı!");
    }
    const data = await fetch(`${apiUrl}/${URL}?id=${id}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
      mode: "no-cors",
    });
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};

const deleteAPI = async (URL, id, method = "DELETE") => {
  try {
    if (!URL) {
      throw new Error("URL veya id bulunamadı!");
    }

    const data = await fetch(`${apiUrl}/${URL}?id=${id}`, {
      headers: headers,
      method: method,
      cache: "no-store",
      mode: "no-cors",
    });
    return data;
  } catch (error) {
    throw new Error("failed");
  }
};

const renderData = async () => {
  //render data
  try {
    const data = await getAPI("todos");
    await addTodo(data);
  } catch (error) {
    throw new Error(error);
  }
};

export { postAPI, getAPI, putAPI, deleteAPI, renderData };
