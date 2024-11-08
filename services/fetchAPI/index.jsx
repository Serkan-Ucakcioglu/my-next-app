const postAPI = async (
  URL,
  body,
  method = "POST",
  headers = { "Content-Type": "application/json" }
) => {
  try {
    if (!process.env.NEXT_PUBLIC_API_URL || !URL) {
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

const getAPI = async (
  URL,
  headers = { "Content-Type": "application/json" }
) => {
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

const putAPI = async (
  URL,
  id,
  body,
  method = "PUT",
  headers = { "Content-Type": "application/json" }
) => {
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

const deleteAPI = async (
  URL,
  id,
  body,
  method = "DELETE",
  headers = (headers = { "Content-Type": "application/json" })
) => {
  try {
    if (!URL && !id) {
      throw new Error("URL veya id bulunamadı!");
    }
    const data = await fetch(`api/${URL}/${id}`, {
      method,
      headers,
      body: JSON.stringify(body),
      cache: "no-store",
    });
  } catch (error) {
    throw new Error("failed");
  }
};

export { postAPI, getAPI, putAPI, deleteAPI };
