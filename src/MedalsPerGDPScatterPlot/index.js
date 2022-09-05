import { useState, useMemo, useCallback } from "react";
import { useData } from "./useData";
import { Input } from "./Input";
import { Card } from "./Card";
import {
  format,
  scaleLinear,
  scaleLog,
  max,
  min,
  scaleSequential,
  interpolateInferno,
} from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./css/ScatterPlot.module.css";

const initialMinMedals = 10;
const width = window.innerWidth < 1000 ? window.innerWidth : 1000;
const height = width > 480 ? width * 0.7 : width * 1;
const margin = { top: 20, right: 50, bottom: 60, left: 55 };

const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

const xValue = (d) => d.medals;
const xAxisLabel = "Total Medals";
const xAxisLabelOffset = 50;
const xAxisTickFormat = (tickValue) => format("~")(tickValue);

const yValue = (d) => d.medals_per_gdp;
const yAxisLabel = "Medals Per GDP";
const yAxisLabelOffset = 20;

const tickOffset = 7;
const markCircleRadius = 6;

export const MedalsPerGDPScatterPlot = () => {
  const [minMedals, setMinMedals] = useState(initialMinMedals);
  const [hoveredValue, setHoveredValue] = useState(null);
  const handleHover = useCallback(setHoveredValue, [setHoveredValue]);

  const colorScale = useMemo(() => scaleSequential(interpolateInferno), []);

  const rawData = useData();
  if (!rawData) return <pre>"Loading..."</pre>;

  const data = rawData.filter((obj) => obj.medals >= minMedals);
  // console.log(data[0]);

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLog()
    .domain([max(data, yValue), min(data, yValue)])
    .range([0, innerHeight]);

  return (
    <Card>
      <ChartTitle title="2020 Summer Olympics: medals per GDP vs. plain medal count" />
      <pre>Last updated: {data[0].last_updated.toLocaleDateString("ja")}</pre>
      <Input
        min={1}
        max={20}
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
          <XAxisLabel />
          <AxisLeft
            innerWidth={innerWidth}
            yScale={yScale}
            tickOffset={tickOffset}
          />
          <YAxisLabel />
          <Marks
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
            data={data}
            tooltipFormat={xAxisTickFormat}
            colorScale={colorScale}
            circleRadius={markCircleRadius}
            onHover={handleHover}
            hoveredValue={hoveredValue}
            fadeOpacity={0.2}
          />
        </g>
      </svg>
      <Credit />
    </Card>
  );
};

const ChartTitle = ({ title }) => (
  <div>
    <h1 style={{ margin: 0 }}>{title}</h1>
  </div>
);

const XAxisLabel = () => (
  <text
    className={styles.axisLabel}
    x={innerWidth / 2}
    y={innerHeight + xAxisLabelOffset}
    textAnchor="middle"
  >
    {xAxisLabel}
  </text>
);

const YAxisLabel = () => (
  <text
    className={styles.axisLabel}
    textAnchor="middle"
    transform={`translate(${-yAxisLabelOffset}, ${
      innerHeight / 2
    }) rotate(-90)`}
  >
    {yAxisLabel}
  </text>
);

const Credit = () => (
  <p className="credit">
    Credit: This chart is created based on Edouard Mathieu's{" "}
    <a href="https://twitter.com/redouad/status/1418976240954978309">idea</a>{" "}
    and <a href="https://github.com/edomt/tokyo2020">his project on GitHub</a>.
  </p>
);
