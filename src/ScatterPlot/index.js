import { useState } from "react";
import { useData } from "./useData";
import { Input } from "./Input";
import { Card } from "./Card";
import { format, scaleLinear, scaleLog, max } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./css/ScatterPlot.module.css";

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

const initialMinMedals = 4;
const width = window.innerWidth < 1000 ? window.innerWidth : 1000;
const height = width > 480 ? width * 0.6 : width * 0.8;
const margin = { top: 20, right: 100, bottom: 60, left: 75 };

// The chart's real height and width
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xValue = (d) => d.medals;
const xAxisLabel = "Total Medals";
const xAxisLabelOffset = 50;
const xAxisTickFormat = (tickValue) => format("~")(tickValue);

const yValue = (d) => d.medals_per_million;
const yAxisLabel = "Medals Per Million People";
const yAxisLabelOffset = 50;

const tickOffset = 7;
const markCircleRadius = 6;

export const ScatterPlot = () => {
  const [minMedals, setMinMedals] = useState(initialMinMedals);

  const rawData = useData();
  if (!rawData) return <pre>"Loading..."</pre>;

  const data = rawData.filter((obj) => obj.medals >= minMedals);
  // console.log(data[0]);

  // X axis is population, thus use linear scale
  const xScale = scaleLinear()
    // Domain is an array of actual data, starts from 0 to the max of all countries
    // d3.max(iterable[, accessor])
    .domain([0, max(data, xValue)])
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Y is medals per million people is log
  const yScale = scaleLog()
    .domain([max(data, yValue), 0.01])
    .range([0, innerHeight]);

  return (
    <Card>
      <ChartTitle title="2020 Summer Olympics medals won" />
      <pre>Last updated: {data[0].last_updated.toLocaleDateString("ja")}</pre>
      <Input
        min={1}
        max={10}
        selected={minMedals}
        handleChange={setMinMedals}
      />
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMid">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            innerHeight={innerHeight}
            xScale={xScale}
            tickFormat={xAxisTickFormat}
            tickOffset={tickOffset}
          />
          <text
            className={styles.axisLabel}
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <AxisLeft
            innerWidth={innerWidth}
            yScale={yScale}
            tickOffset={tickOffset}
          />
          <text
            className={styles.axisLabel}
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset}, ${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <Marks
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
            data={data}
            tooltipFormat={xAxisTickFormat}
            circleRadius={markCircleRadius}
          />
        </g>
      </svg>
      <Credit />
    </Card>
  );
};
