interface IHeader{
    title: string;
    size?: number;
}

export default function Header({title, size} : IHeader) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
