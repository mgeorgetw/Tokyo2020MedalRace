import { GitHubStarBtn } from "./GitHubStarBtn";
import { Intro } from "./Intro/index";
import { MedalsPerMillionPeopleBar } from "./MedalsPerMillionPeople/index";
import { ScatterPlot } from "./ScatterPlot";
import "./App.css";

const App = () => (
  <>
    <GitHubStarBtn user="mgeorgetw" repo="Tokyo2020MedalRace" />
    <Intro />
    <MedalsPerMillionPeopleBar />
    <ScatterPlot />
  </>
);

export default App;
