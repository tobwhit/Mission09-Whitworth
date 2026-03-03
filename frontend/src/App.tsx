import "./App.css";
import collegeData from "./CollegeBasketballTeams.json";

function Heading() {
  return (
    <>
      <h1 className="display-4 fw-bold text-decoration-underline">Welcome!</h1>
      <h2 className="fs-4">
        View information about all the colleges in NCAA Basketball🏀
      </h2>
    </>
  );
}

function College({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <div className="border border-secondary rounded p-3 mb-3">
      <h2>{school}</h2>
      <h2>Mascot: {name}</h2>
      <h2>
        Location: {city}, {state}
      </h2>
    </div>
  );
}

function CollegeList() {
  return (
    <div className="border border-primary border-2 rounded p-4 mt-4">
      {collegeData.teams.map((singleCollege) => (
        <College key={singleCollege.school} {...singleCollege} />
      ))}
    </div>
  );
}

function App() {
  return (
    <>
      <Heading />
      <CollegeList />
    </>
  );
}

export default App;
