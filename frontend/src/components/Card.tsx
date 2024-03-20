import { removeCard } from "../redux/cardContentsSlice";
import { useDispatch } from "react-redux";

interface ICard {
  id: number;
  title?: string;
  body: string;
}

export default function Card({ id, title, body }: ICard) {
  const dispatch = useDispatch();
  const handleEdit = ()=>{

  }
  return (
    <>
      <div className="card container-lg shadow p-3 mb-5 bg-body-tertiary rounded">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <div className="d-flex justify-content-center gap-2">
          <button
            onClick={() => dispatch(removeCard(id))}
            className="btn btn-primary"
          >
            Remove
          </button>
          <button
            onClick={() => {handleEdit}}
            className="btn btn-primary"
          >
            Edit
          </button>
          </div>
        </div>
      </div>
    </>
  );
}
