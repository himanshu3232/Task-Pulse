interface IHeader {
  title: string;
  size?: number;
}

export default function Header({ title, size }: IHeader) {
  return (
    <div className="custom-heading">
      <h1 className={`display-${size}`}>{title}</h1>
    </div>
  );
}
