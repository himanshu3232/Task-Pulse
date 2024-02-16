import MiddleBody from "./MiddleBody";

export default function Home() {
  return (
    <div>
      <div className="quote-img">
        <figure className="quote">
          <blockquote className="blockquote">
            <p>
              "Task management is the cornerstone of productivity, with the
              right tools and technology, it becomes the pathway to success."
            </p>
          </blockquote>
          <figcaption className="blockquote-footer">
            Entrepreneur <cite title="Source Title">Elon Musk</cite>
          </figcaption>
        </figure>
      </div>
      <div className="middle-body">
        <MiddleBody />
      </div>
    </div>
  );
}
