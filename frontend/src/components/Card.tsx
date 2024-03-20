import { useState } from "react";
import { removeCard, updateCard } from "../redux/cardContentsSlice";
import { useDispatch } from "react-redux";

interface ICard {
  id: number;
  title?: string;
  body: string;
}

export default function Card({ id, title, body }: ICard) {
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedBody, setUpdatedBody] = useState(body);
  const [editing, setEditing] = useState<Boolean>(false);

  function handleBodyChange(e: any) {
    setUpdatedBody(e.target.value);
    const updatedTask = {
      id: id,
      title: updatedTitle,
      body: updatedBody,
    };
    dispatch(updateCard(updatedTask));
  }

  function handleTitleChange(e: any) {
    setUpdatedTitle(e.target.value);
  }

  return (
    <>
      <div className="card container-lg shadow p-3 mb-5 bg-secondary-subtle text-secondary-emphasis bg-body-tertiary rounded">
        <div className="card-body">
          {editing ? (
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control-plaintext card-header"
                id="floatingEmptyPlaintextInput"
                value={updatedTitle}
                onChange={handleTitleChange}
              />
              <textarea
                className="form-control card-body"
                id={`card-body-${id}`}
                value={updatedBody}
                onChange={handleBodyChange}
                style={{ resize: "none" }}
              />
            </div>
          ) : (
            <div onClick={() => setEditing(true)}>
              <div className="card-header">{updatedTitle}</div>
              <div className="card-body">
                <p>{updatedBody}</p>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center gap-1">
            <button
              onClick={() => dispatch(removeCard(id))}
              className="btn btn-danger"
            >
              Remove
            </button>
            {editing && (
              <button
                onClick={() => setEditing(false)}
                className="btn btn-secondary"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
