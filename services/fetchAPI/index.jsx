"use client";
const headers = { "Content-Type": "application/json" };

const postAPI = async (URL, body, method = "POST") => {
  try {
    if (!URL) {
      throw new Error("URL bulunamadı!");
    }
    const data = await fetch(`api/${URL}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch (err) {
    throw new Error(`API request failed: ${err}`);
  }
};

const getAPI = async (URL) => {
  try {
    const res = await fetch(`api/${URL}`, {
      method: "GET",
      headers: headers,
      cache: "no-store",
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
    const data = await fetch(`api/${URL}/${id}`, {
      method: method,
      headers: headers,
      body: JSON.stringify(body),
      cache: "no-store",
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

    const data = await fetch(`api/${URL}?id=${id}`, {
      headers: headers,
      method: method,
      cache: "no-store",
    });
    return data;
  } catch (error) {
    throw new Error("failed");
  }
};

export { postAPI, getAPI, putAPI, deleteAPI };
