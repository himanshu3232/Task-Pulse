import { useState } from "react";
import { removeCard, updateCard } from "../redux/cardContentsSlice";
import { useDispatch } from "react-redux";

interface ICard {
  id: number;
  title?: string;
  body?: string;
}

export default function Card({ id, title, body }: ICard) {
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState<String | undefined>(title);
  const [updatedBody, setUpdatedBody] = useState<String | undefined>(body);
  const [editing, setEditing] = useState<Boolean>(false);

  function handleEditing() {
    setEditing(false);
    const updatedTask = {
      id: id,
      title: updatedTitle,
      body: updatedBody,
    };
    dispatch(updateCard(updatedTask));
  }
  function handleSubmit(e: any) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEditing();
    }
  }

  return (
    <>
      <div className="card container-lg shadow p-3 mb-5 text-secondary-emphasis bg-body-tertiary rounded bg-secondary-subtle ">
        <div className="card-body bg-secondary-subtle ">
          {editing ? (
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control-plaintext card-header"
                id="floatingEmptyPlaintextInput"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                onKeyDown={handleSubmit}
              />
              <textarea
                className="form-control card-body"
                id={`card-body-${id}`}
                value={updatedBody}
                onChange={(e) => setUpdatedBody(e.target.value)}
                style={{ resize: "none" }}
                onKeyDown={handleSubmit}
              />
            </div>
          ) : (
            <div className="card bg-secondary-subtle" onClick={() => setEditing(true)}>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text">
                  <p>{body}</p>
                </div>
              </div>
            </div>
          )}
          <div className="d-flex justify-content-center gap-1 m-2">
            <button
              onClick={() => dispatch(removeCard(id))}
              className="btn btn-danger"
            >
              Remove
            </button>
            {editing && (
              <button onClick={handleEditing} className="btn btn-secondary">
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
