import { GitHubStarBtn } from "./GitHubStarBtn";
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

const Intro = () => {
  return (
    <>
      <h1 className="intro">A fairer medal system</h1>
      <p className="intro">
        When you look at Olympic's official medal count, it is easy to find that
        countries with a larger population tend to sit on the top of the chart.
        Although there are limits to the number of athletes each country can
        send to the Olympic games, larger countries do have a bigger pool to
        choose the best of their athletes. Obviously there should be a fairer
        way to count the medals.
      </p>
      <p className="intro">
        So what if we count the medals considering the population of each
        country? Which country wins the most medals per capita? That is what
        these charts are about.
      </p>
    </>
  );
};

export default App;
