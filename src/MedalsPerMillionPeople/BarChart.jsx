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
// import { NavBar } from "./NavBar";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Tooltip } from "./Tooltip";
// import { ColorLegend } from "./ColorLegend";
// import chartStyles from "./css/BarChart.module.css";

const width = window.innerWidth < 1000 ? window.innerWidth : 1000;
const margin = { top: 5, right: 50, bottom: 45, left: 160 };

// const formatDate = timeFormat("%Y/%-m/%-d");
const yValue = (d) => d.entity;

const xAxisTickFormat = (tickValue) => format("~")(tickValue);
const labelFormat = format(".2");

// Legend settings
// const legendRectSize = 15;
// const legendItemSpacing = 26;
// const legendX = width - margin.left;
// const legendY = innerHeight - legendItemSpacing;
// const ColorLegendLabel = "疫苗現況";

const fadeOpacity = 0.3;

export const BarChart = ({ view, data, rows }) => {
  // console.log(data);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [points, setPoints] = useState(null);
  const handleHover = useCallback(setHoveredValue, [setHoveredValue]);
  const trackPointer = useCallback(setPoints, [setPoints]);

  const height = 20 * rows + margin.top + margin.bottom;
  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = useMemo(
    () => (view === "mpm" ? (d) => d.medals_per_million : (d) => d.medals),
    [view]
  );

  // X axis is percentage of vaccines, thus use linear scale
  const xScale = useMemo(
    () =>
      view === "mpm"
        ? scaleLog().domain(extent(data, xValue)).range([0, innerWidth]).nice()
        : scaleLinear()
            .domain([0, max(data, xValue)])
            .range([0, innerWidth])
            .nice(),
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

  return (
    <>
      <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMinYMid">
        {/* Adds margin to left and top  */}
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
          />
          {hoveredValue && points ? (
            <Tooltip
              data={data}
              hoveredValue={hoveredValue}
              points={points}
              labelOffset={10}
            />
          ) : null}
        </g>
        {/* <g transform={`translate(${legendX}, ${legendY})`}> */}
        {/*   <text className={styles.legendLabel} x={-7} y={-legendItemSpacing}> */}
        {/*     {ColorLegendLabel} */}
        {/*   </text> */}
        {/*   <ColorLegend */}
        {/*     xScake={xScale} */}
        {/*     xValue1={xValue1} */}
        {/*     xValue2={xValue2} */}
        {/*     tickSpacing={legendItemSpacing} */}
        {/*     tickSize={legendRectSize} */}
        {/*     tickTextOffset={16} */}
        {/*     onHover={setHoveredValue} */}
        {/*     hoveredValue={hoveredValue} */}
        {/*     fadeOpacity={fadeOpacity} */}
        {/*   /> */}
        {/* </g> */}
      </svg>
    </>
  );
};
