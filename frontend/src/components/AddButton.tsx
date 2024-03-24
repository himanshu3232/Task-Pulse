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
        id: tasks[tasks.length - 1].id + 1,
        title: title,
        body: body,
      };
      dispatch(addCard(newTask));
      setTitle("");
      setBody("");
    }
    setVisibility(!visible);
  };
  const handleSubmit = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };
  return (
    <div>
      {visible && (
        <div className="container-lg">
          <div className="input-group">
            <span className="input-group-text p-1 m-2">Title and Body</span>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              aria-label="First name"
              className="form-control m-2"
              onKeyDown={handleSubmit}
            />
            <input
              onChange={(e) => setBody(e.target.value)}
              type="text"
              aria-label="Last name"
              className="form-control m-2"
              onKeyDown={handleSubmit}
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
