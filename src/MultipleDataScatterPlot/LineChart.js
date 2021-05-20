import { useState, useCallback, useMemo } from "react";
import { scaleLog, scaleTime, line, timeFormat, format, extent, max } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { VoronoiOverlay } from "./VoronoiOverlay";
import { XMarkerLine } from "./XMarkerLine";
import { YMarkerLine } from "./YMarkerLine";
import styles from "./LineChart.module.css";

const margin = { top: 50, right: 50, bottom: 60, left: 80 };
const titleOffset = 15;

const xValue = d => d.date;
const xAxisLabel = "Time";
const xAxisLabelOffset = 50;
const xAxisTickFormat = timeFormat("%b %d, %y"); // Eg. Jan 01, 21

const yValue = d => d.deathTotal;
const yAxisLabel = "Cumulative Deaths";
const yAxisLabelOffset = 50;

// Format numbers with commas.
const formatComma = format(",");

export const LineChart = ({ data, width, height }) => {
  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // Change state when different line is hovered
  const [activeRow, setActiveRow] = useState();

  // useMemo() to optimize performance
  const allData = useMemo(
    () =>
      // Combine all data for scales and voronoi overlay
      data.reduce(
        (accumulator, countryTimeseries) =>
          accumulator.concat(countryTimeseries),
        []
      ),
    [data]
  );

  const epsilon = 1;

  // X axis is date
  const xScale = useMemo(
    () =>
      scaleTime()
        // Domain is an array of actual dates
        // d3.extent(iterable[, accessor]) returns the [max, min] of iterable
        .domain(extent(allData, xValue))
        // Range is where the data is shown in pixels, starts from 0 to chart's width
        .range([0, innerWidth])
        .nice(),
    [allData, innerWidth]
  );

  // Y is number of deaths
  const yScale = useMemo(
    () =>
      scaleLog()
        .domain([epsilon, max(allData, yValue)])
        .range([innerHeight, 0])
        .nice(),
    [allData, innerHeight]
  );

  const lineGenerator = useMemo(
    () =>
      line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(epsilon + yValue(d))),
    [xScale, yScale, epsilon]
  );

  const mostRecentDate = extent(allData, xValue)[1];

  const handleVoronoiHover = useCallback(setActiveRow, [setActiveRow]);

  const Tooltip = ({ activeRow, className }) => (
    <text className={className} textAnchor={"end"} x={-10} y={-10}>
      {activeRow.countryName}: {formatComma(activeRow.deathTotal)} death
      {activeRow.deathTotal > 1 ? "s" : ""} as of{" "}
      {xAxisTickFormat(activeRow.date)}
    </text>
  );

  return (
    <svg width={width} height={height}>
      {/* Adds margin to left and top  */}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <text y={-titleOffset} className={styles.title}>
          Global CoVid-19 Deaths Over Time
        </text>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
        />
        <text
          className={styles.axisLabel}
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
          alignmentBaseline="hanging"
        >
          {xAxisLabel}
        </text>
        <AxisLeft innerWidth={innerWidth} yScale={yScale} tickOffset={7} />
        <text
          className={styles.axisLabel}
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <YMarkerLine value={100000} yScale={yScale} innerWidth={innerWidth} />
        <XMarkerLine
          value={mostRecentDate}
          xScale={xScale}
          innerHeight={innerHeight}
        />
        {data.map(countryTimeseries => {
          return (
            <path
              className={styles.marks}
              d={lineGenerator(countryTimeseries)}
            />
          );
        })}
        {activeRow ? (
          <>
            <path
              className={styles.marksActive}
              d={lineGenerator(
                data.find(
                  countryTimeseries =>
                    countryTimeseries.countryName === activeRow.countryName
                )
              )}
            />
            <g
              transform={`translate(${lineGenerator.x()(
                activeRow
              )}, ${lineGenerator.y()(activeRow)})`}
            >
              <circle className={styles.dataPoint} r={5} />
              <Tooltip activeRow={activeRow} className={styles.tooltipStroke} />
              <Tooltip activeRow={activeRow} className={styles.tooltip} />
            </g>
          </>
        ) : null}
        <VoronoiOverlay
          margin={margin}
          onHover={handleVoronoiHover}
          allData={allData}
          lineGenerator={lineGenerator}
          innerWidth={innerWidth}
          innerHeight={innerHeight}
        />
      </g>
    </svg>
  );
};
