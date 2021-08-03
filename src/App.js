import { GitHubStarBtn } from "./GitHubStarBtn";
import { MedalsPerMillionPeopleBar } from "./MedalsPerMillionPeople/index";
import { ScatterPlot } from "./ScatterPlot";
import "./App.css";

const App = () => (
  <>
    <GitHubStarBtn user="mgeorgetw" repo="Tokyo2020MedalRace" />
    <MedalsPerMillionPeopleBar />
    <ScatterPlot />
  </>
);

export default App;
