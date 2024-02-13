import HandleUser from "./api/HandleUser";
import Header from "./Header";

export default function Register() {
  return (
    <div>
      <Header title="Register to Task Pulse" size={2} />
      <HandleUser api="/register" method="POST" requestType="register" />
    </div>
  );
}
