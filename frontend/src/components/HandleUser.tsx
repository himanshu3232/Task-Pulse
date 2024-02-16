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
    <div className="card card-body custom-form shadow p-3 mb-5 bg-body-tertiary rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputUserName" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUserName"
            aria-describedby="emailHelp"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <h1>{response ? "success!" : ""}</h1>
    </div>
  );
}
