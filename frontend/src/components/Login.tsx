import HandleUser from "./HandleUser";
import Header from "./Header";

export default function Login() {
  return (
    <div>
      <Header title="Login to Task Pulse" size={2} />
      <HandleUser api={"/login"} method="POST" />
    </div>
  );
}
