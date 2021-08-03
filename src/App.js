import { GitHubStarBtn } from "./GitHubStarBtn";
import { MedalsPerMillionPeopleBar } from "./MedalsPerMillionPeople/index";
import { ScatterPlot } from "./ScatterPlot";
import "./App.css";

const App = () => (
  <>
    <GitHubStarBtn user="mgeorgetw" repo="COVID-19-Dashboard" />
    <MedalsPerMillionPeopleBar />
    <ScatterPlot />
  </>
);

export default App;
