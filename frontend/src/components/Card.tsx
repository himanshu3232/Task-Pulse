interface ICard {
  id?: number;
  header?: string;
  body: string;
}
export default function Card({ header, body }: ICard) {
  return (
    <div className="card text-bg-secondary mb-3">
      <div className="card-header">{header}</div>
      <div className="card-body">
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}
