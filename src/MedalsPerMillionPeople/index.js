import React, { useState } from "react";
import { useData } from "./useData";
import { Card } from "./Card";
import { Input } from "./Input";
// import { useDeaths } from "./useDeaths";
// import { useInfected } from "./useInfected";
import { NavBar } from "./NavBar";
import { BarChart } from "./BarChart";
// import { Collapsible } from "./Collapsible";

const ChartTitle = ({ title }) => (
  <div>
    <h1 style={{ margin: 0 }}>{title}</h1>
  </div>
);

export const MedalsPerMillionPeopleBar = () => {
  const [view, setView] = useState("mpm");
  const [topTeams, setTopTeams] = useState(30);
  const rawData = useData();
  // console.log(data);

  if (!rawData) return "Loading ...";
  const data = rawData.slice(0, topTeams);

  // const infected = view === "age" ? infectedData.age : infectedData.gender;
  // const deaths = view === "age" ? deathsData.age : deathsData.gender;

  return (
    <Card>
      <ChartTitle
        title={`2020 Summer Olympics ${
          view === "mpm" ? "medals per million people" : "total medals won"
        }`}
      />
      <pre>
        Last updated: {data[0].last_updated.toLocaleDateString("zh-TW")}
      </pre>
      <Input
        min={10}
        max={rawData.length}
        selected={topTeams}
        handleChange={setTopTeams}
      />
      <NavBar view={view} setView={setView} />
      <BarChart view={view} data={data} rows={topTeams} />
      {/* <Collapsible id="CFRByGroupsinTaiwan" /> */}
    </Card>
  );
};
