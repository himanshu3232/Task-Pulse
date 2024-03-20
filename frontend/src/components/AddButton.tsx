import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../redux/cardContentsSlice";

export default function AddButton() {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState<Boolean>(false);
  const [title, setTitle] = useState<String>("");
  const [body, setBody] = useState<String>("");
  const tasks = useSelector((store: any) => store.cardContent.cards);

  const handleClick = () => {
    if (visible && (title.length > 0 || body.length > 0)) {
      const newTask = {
        id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
        title: title,
        body: body,
      };
      dispatch(addCard(newTask));
      setTitle("");
      setBody("");
    }
    setVisibility(!visible);
  };
  return (
    <div>
      {visible && (
        <div className="container-lg">
          <div className="input-group">
            <span className="input-group-text">Title and Body</span>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              aria-label="First name"
              className="form-control"
            />
            <input
              onChange={(e) => setBody(e.target.value)}
              type="text"
              aria-label="Last name"
              className="form-control"
            />
          </div>
        </div>
      )}
      <button
        onClick={handleClick}
        className="btn btn-primary m t-2 container-sm"
      >
        Add Task
      </button>
    </div>
  );
}
