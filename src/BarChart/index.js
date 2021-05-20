import { useData } from "./useData";
import { scaleBand, scaleLinear, max, format } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./BarChart.module.css";

const width = 760;
const height = 350;
const margin = { top: 20, right: 20, bottom: 60, left: 200 };
const xAxisLabelOffset = 50;
const yValue = d => d.Country;
const xValue = d => d.Population;
const siFormat = format(".2s");
const xAxisTickFormat = tickValue => siFormat(tickValue).replace("G", "B");

export const BarChart = () => {
  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  console.log(data[0]);

  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // X axis is population, thus use linear scale
  const xScale = scaleLinear()
    // Domain is an array of actual data, starts from 0 to the max of all countries
    // d3.max(iterable[, accessor])
    .domain([0, max(data, xValue)])
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth]);

  // Y is countries is categorical, band scale is for ordinal or categorical dimension
  const yScale = scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15);

  return (
    <svg width={width} height={height}>
      {/* Adds margin to left and top  */}
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          innerHeight={innerHeight}
          xScale={xScale}
          tickFormat={xAxisTickFormat}
        />
        <AxisLeft yScale={yScale} />
        <text
          className={styles.axisLabel}
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor="middle"
        >
          Population
        </text>
        <Marks
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          tooltipFormat={xAxisTickFormat}
        />
      </g>
    </svg>
  );
};
