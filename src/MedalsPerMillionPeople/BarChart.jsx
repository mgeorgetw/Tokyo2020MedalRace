import React, { useState, useMemo, useCallback } from "react";
import {
  scaleBand,
  scaleLog,
  scaleLinear,
  scaleSequential,
  interpolateInferno,
  extent,
  max,
  format,
} from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Tooltip } from "./Tooltip";
// import chartStyles from "./css/BarChart.module.css";

const width = window.innerWidth < 1000 ? window.innerWidth : 1000;
const margin = { top: 5, right: 50, bottom: 45, left: 160 };

const yValue = (d) => d.entity;

const xAxisTickFormat = (tickValue) => format("~r")(tickValue);

const fadeOpacity = 0.3;

export const BarChart = ({ view, data }) => {
  // console.log(data);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [points, setPoints] = useState(null);
  const handleHover = useCallback(setHoveredValue, [setHoveredValue]);
  const trackPointer = useCallback(setPoints, [setPoints]);

  const height = 20 * data.length + margin.top + margin.bottom;
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = useMemo(() => (d) => d[view], [view]);

  const xScale = useMemo(
    () =>
      view === "medals"
        ? scaleLinear()
            .domain([0, max(data, xValue)])
            .range([0, innerWidth])
            .nice()
        : scaleLog().domain(extent(data, xValue)).range([0, innerWidth]).nice(),
    [view, data, xValue, innerWidth]
  );

  const yScale = useMemo(
    () =>
      scaleBand()
        .domain(data.map((d) => yValue(d)))
        .range([0, innerHeight])
        .paddingInner(0.2),
    [data, innerHeight]
  );

  const colorScale = useMemo(() => scaleSequential(interpolateInferno), []);

  const labelFormat =
    view === "medals_per_million" ? format(".2") : format("~r");

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMid">
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom
            innerHeight={innerHeight}
            xScale={xScale}
            tickFormat={xAxisTickFormat}
            tickOffset={8}
            tickCount={width > 480 ? 3 : 2}
          />

          <AxisLeft yScale={yScale} tickOffset={8} />

          <Marks
            view={view}
            data={data}
            margin={margin}
            innerWidth={innerWidth}
            xScale={xScale}
            xValue={xValue}
            yScale={yScale}
            yValue={yValue}
            colorScale={colorScale}
            tooltipFormat={labelFormat}
            onHover={handleHover}
            onMove={trackPointer}
            hoveredValue={hoveredValue}
            fadeOpacity={fadeOpacity}
            tooltipOffset={10}
          />

          {hoveredValue && points ? (
            <Tooltip
              data={data}
              hoveredValue={hoveredValue}
              points={points}
              tooltipOffset={10}
            />
          ) : null}
        </g>
      </svg>
    </>
  );
};
