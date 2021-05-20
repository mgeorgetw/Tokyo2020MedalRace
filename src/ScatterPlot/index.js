import { useData } from "./useData";
import { format, scaleLinear, extent } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import styles from "./ScatterPlot.module.css";

export const ScatterPlot = () => {
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

  const xValue = d => d.sepal_length;
  const xAxisLabel = "Sepal Length";

  const yValue = d => d.sepal_width;
  const yAxisLabel = "Sepal Width";

  const siFormat = format(".2s");
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace("G", "B");

  // X axis is population, thus use linear scale
  const xScale = scaleLinear()
    // Domain is an array of actual data, starts from 0 to the max of all countries
    // d3.max(iterable[, accessor])
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Y is countries is categorical, band scale is for ordinal or categorical dimension
  const yScale = scaleLinear()
    .domain(extent(data, yValue))
    .range([0, innerHeight]);

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
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          data={data}
          tooltipFormat={xAxisTickFormat}
          circleRadius={6}
        />
      </g>
    </svg>
  );
};
