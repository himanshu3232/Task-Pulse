import { useEffect } from "react";

interface IHeader {
  title: string;
  size?: number;
}

export default function Header({ title, size }: IHeader) {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate");
    elements.forEach((element) => {
      element.classList.add("fade-in");
    });
  }, []);
  return (
    <div className="custom-heading animate">
      <h1 className={`display-${size}`}>{title}</h1>
    </div>
  );
}
