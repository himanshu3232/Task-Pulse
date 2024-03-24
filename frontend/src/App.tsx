import { useSelector } from "react-redux";
import Card from "./components/Card";
import Header from "./components/Header";
import AddButton from "./components/AddButton";

export default function App() {
  const tasks = useSelector((store: any) => store.cardContent.cards);

  return (
    <div className="container-fluid text-center">
      <Header content="Task Pulse" size={1} />
      <AddButton />
      <div className="row row-cols-2 p-2 m-1">
        {tasks.map(
          (task: any, index: number) =>
            index !== 0 && (
              <Card
                key={task.id}
                id={task.id}
                title={task.title}
                body={task.body}
              />
            )
        )}
      </div>
    </div>
  );
}
