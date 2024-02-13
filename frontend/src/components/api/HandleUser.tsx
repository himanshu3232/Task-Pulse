import { useState, useContext } from "react";
import handleAPI from "./HandleAPI";
import { userStatusContext } from "../../context/userStatusContext";
import HandleRedirect from "../../HandleRedirect";

interface IHandleUser {
  api: string;
  method: string;
  requestType: string;
}

export default function HandleUser({ api, method, requestType }: IHandleUser) {
  const { setLoginStatus, setRegisterStatus } = useContext(userStatusContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const requestBody = JSON.stringify({ username, password });
  const body = requestBody;

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const result = await handleAPI({ api, method, body });
    if (requestType === "login") setLoginStatus(result);
    else if (requestType === "register") setRegisterStatus(result);
    HandleRedirect(result, requestType);
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
    </div>
  );
}
