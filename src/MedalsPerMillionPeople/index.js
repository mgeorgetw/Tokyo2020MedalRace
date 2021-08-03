import React, { useState } from "react";
import { useData } from "./useData";
import { Card } from "./Card";
import { Input } from "./Input";
import { NavBar } from "./NavBar";
import { BarChart } from "./BarChart";

const ChartTitle = ({ title }) => (
  <div>
    <h1 style={{ margin: 0 }}>{title}</h1>
  </div>
);

const Credit = () => (
  <p className="credit">
    Credit: This chart is created based on Edouard Mathieu's{" "}
    <a href="https://twitter.com/redouad/status/1418976240954978309">idea</a>{" "}
    and <a href="https://github.com/edomt/tokyo2020">his project on GitHub</a>.
  </p>
);

export const MedalsPerMillionPeopleBar = () => {
  const [view, setView] = useState("mpm");
  const [topTeams, setTopTeams] = useState(30);
  const rawData = useData();

  if (!rawData) return <pre>"Loading..."</pre>;
  const data = rawData.slice(0, topTeams);
  // if (data) console.log(data[0]);

  return (
    <Card>
      <ChartTitle
        title={`2020 Summer Olympics ${
          view === "mpm" ? "medals per million people" : "total medals won"
        }`}
      />
      <pre>Last updated: {data[0].last_updated.toLocaleDateString("ja")}</pre>
      <Input
        min={10}
        max={rawData.length}
        selected={topTeams}
        handleChange={setTopTeams}
      />
      <NavBar view={view} setView={setView} />
      <BarChart view={view} data={data} rows={topTeams} />
      <Credit />
    </Card>
  );
};
