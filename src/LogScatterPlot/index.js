import { useData } from "./useData";
import { timeFormat, scaleLog, scaleTime, extent, max } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./ScatterPlot.module.css";

// Canvas size
const width = 760;
const height = 350;
const margin = { top: 20, right: 50, bottom: 60, left: 90 };

// The chart's real height and width
const innerHeight = height - margin.top - margin.bottom;
const innerWidth = width - margin.left - margin.right;

// Labels positioning
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 60;

// Axis label and values
const xValue = d => d["Reported Date"];
const xAxisLabel = "Time";
const yValue = d => d["Total Dead and Missing"];
const yAxisLabel = "Total Dead and Missing";
const xAxisTickFormat = timeFormat("%m/%d/%Y");

export const LogScatterPlot = () => {
  // Fetche data and handle fetching error
  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  console.log(data[0]);

  // X axis are dates, thus use time scale
  const xScale = scaleTime()
    // Domain is an array of actual dates
    // d3.extent(iterable[, accessor]) returns the [max, min] of iterable
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLog()
    // Domain is an array of actual data.
    // Log(0) is -infinity, so give it a small number to avoid error.
    // d3.max(iterable[, accessor]) returns the max value
    .domain([1, max(extent(data, yValue))])
    .range([innerHeight, 0])
    .nice();

  return (
    <svg width={width} height={height}>
      {/* Adds margin to left and top  */}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {/* Axis at the bottom is x axis */}
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
        >
          {xAxisLabel}
        </text>
        {/* Axis at the left is y axia */}
        <AxisLeft innerWidth={innerWidth} yScale={yScale} tickOffset={7} />
        <text
          className={styles.axisLabel}
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        {/* Scatter plot marks */}
        <Marks
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          data={data}
          tooltipFormat={xAxisTickFormat}
          circleRadius={3}
        />
      </g>
    </svg>
  );
};
