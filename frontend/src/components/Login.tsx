import HandleUser from "./api/HandleUser";
import Header from "./Header";

interface ILogin{
  status ?: boolean;
}

export default function Login({status} : ILogin) {
  return (
    <div>
      <Header title="Login to Task Pulse" size={2} />
      <HandleUser api={"/login"} method="POST" requestType="login" />
    </div>
  );
}
