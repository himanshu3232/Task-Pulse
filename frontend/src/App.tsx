import HandleUser from "./components/HandleUser";
import Header from "./components/Header";

export default function App() {
  return (
    <div>
      <Header title="UPDATE USER" />
      <HandleUser api="/user/update-password" method="PUT" />
    </div>
  );
}
