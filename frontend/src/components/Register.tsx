import HandleUser from "./HandleUser";
import Header from "./Header";

export default function Register() {
  return (
    <div>
      <Header title="Register to Task Pulse" size={2} />
      <HandleUser api={"/login"} method="POST" />
    </div>
  );
}
