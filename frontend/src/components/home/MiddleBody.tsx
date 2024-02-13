import Card from "../Card";

export default function MiddleBody() {
  const facts: any[] = [
    {
      header: "Zeigarnik Effect",
      body: "Psychologically, incomplete tasks tend to occupy more mental space than completed ones, a phenomenon known as the Zeigarnik Effect. Task Pulse leverages this insight by offering features that prioritize and manage tasks effectively, reducing cognitive load and enhancing focus.",
    },
    {
      header: "Parkinson's Law",
      body: "Parkinson's Law states that work expands to fill the time available for its completion. Task Pulse incorporates this principle by providing users with tools to set deadlines and time limits for tasks, encouraging efficient time management and preventing procrastination.",
    },
    {
      header: "Eisenhower Matrix",
      body: "The Eisenhower Matrix categorizes tasks based on urgency and importance, guiding users to prioritize tasks effectively. Task Pulse integrates this strategy by offering customizable task sorting and filtering options, empowering users to focus on high-priority tasks and delegate or defer less critical ones.",
    },
  ];
  return (
    <div className="middle-body">
      {facts.map((fact, index) => (
        <Card id={index} header={fact.header} body={fact.body} key={index} />
      ))}
    </div>
  );
}
