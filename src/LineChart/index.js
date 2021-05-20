import { useData } from "./useData";
import { scaleLinear, scaleTime, timeFormat, extent } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./LineChart.module.css";

export const LineChart = () => {
  const width = 760;
  const height = 350;
  const margin = { top: 20, right: 20, bottom: 60, left: 90 };
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 40;

  const data = useData();

  if (!data) return <pre>"Loading..."</pre>;

  console.log(data[0]);

  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d.timestamp;
  const xAxisLabel = "Time";

  const yValue = d => d.temperature;
  const yAxisLabel = "Temperature";

  const xAxisTickFormat = timeFormat("%a");

  // X axis is population, thus use linear scale
  const xScale = scaleTime()
    // Domain is an array of actual data, starts from 0 to the max of all countries
    // d3.max(iterable[, accessor])
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Y is countries is categorical, band scale is for ordinal or categorical dimension
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([innerHeight, 0])
    .nice();

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
        <AxisLeft innerWidth={innerWidth} yScale={yScale} tickOffset={7} />
        <text
          className={styles.axisLabel}
          textAnchor="middle"
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight /
            2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>
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
