import { useData } from "./useData";
import { scaleLinear, scaleTime, timeFormat, extent, max, format } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { YMarkerLine } from "./YMarkerLine";
import { XMarkerLine } from "./XMarkerLine";
import styles from "./LineChart.module.css";

const width = window.innerWidth;
const height = window.innerHeight;
const margin = { top: 20, right: 50, bottom: 60, left: 100 };

const xValue = d => d.date;
const xAxisLabel = "Time";
const xAxisLabelOffset = 50;
const xAxisTickFormat = timeFormat("%b %y");

const yValue = d => d.deathTotal;
const yAxisLabel = "Deaths by COVID-19";
const yAxisLabelOffset = 60;
const siFormat = format(".2s");
const yAxisTickFormat = tickValue => siFormat(tickValue);

export const CovidLineChart = () => {
  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  console.log(data);

  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // X axis is population, thus use linear scale
  const xScale = scaleTime()
    // Domain is an array of actual dates
    // d3.extent(iterable[, accessor]) returns the [max, min] of iterable
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Y is countries is categorical, band scale is for ordinal or categorical dimension
  const yScale = scaleLinear()
    .domain([0, max(data, yValue)])
    .range([innerHeight, 0])
    .nice();

  const mostRecentDate = extent(data, xValue)[1];

  return (
    <svg width={width} height={height}>
      {/* Adds margin to left and top  */}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
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
        <AxisLeft
          innerWidth={innerWidth}
          yScale={yScale}
          tickOffset={7}
          tickFormat={yAxisTickFormat}
        />
        <text
          className={styles.axisLabel}
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
        <YMarkerLine value={3000000} yScale={yScale} innerWidth={innerWidth} />
        <XMarkerLine
          value={mostRecentDate}
          xScale={xScale}
          innerHeight={innerHeight}
        />
        <Marks
          xScale={xScale}
          yScale={yScale}
          data={data}
          xValue={xValue}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
          circleRadius={3}
        />
      </g>
    </svg>
  );
};
