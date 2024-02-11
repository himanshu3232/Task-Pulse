import { useState } from "react";
import handleAPI from "./handleAPI";

interface IHandleUser {
  api: string;
  method: string;
}

export default function HandleUser({ api, method }: IHandleUser) {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [response, setResponse] = useState<boolean>(false);

  const requestBody = JSON.stringify({ username, password });
  const body = requestBody;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await handleAPI({ api, method, body });
    setResponse(result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="username-form">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            placeholder="Username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="password-form">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="buttons">
          <input type="submit" />
        </div>
      </form>
      <h1>{response ? "true" : "false"}</h1>
    </div>
  );
}
