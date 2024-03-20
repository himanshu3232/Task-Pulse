interface IHeader {
  content: string;
  size?: number;
}

export default function Header({ content, size }: IHeader) {
  return <div className={`display-${size} container-sm pb-2`}>{content}</div>;
}
