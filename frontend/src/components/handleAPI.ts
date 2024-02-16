interface IhandleAPI {
  api: string;
  method: string;
  body: any;
}

export default async function handleAPI({
  api,
  method,
  body,
}: IhandleAPI) : Promise<boolean> {
  const url = `http://localhost:8080${api}`;
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    });
    const data = await response.text();
    return data === "true";
  } catch (error: any) {
    console.error(error.message);
  }
  return false;
}
