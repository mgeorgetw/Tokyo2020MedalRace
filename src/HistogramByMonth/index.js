import { useData } from "./useData";
import { scaleLinear, scaleTime, timeFormat, extent } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { sum, bin, max, timeMonths } from "d3";
import styles from "./Histogram.module.css";

export const HistogramByMonth = () => {
  const width = 760;
  const height = 350;
  const margin = { top: 20, right: 35, bottom: 60, left: 90 };
  const xAxisLabelOffset = 50;
  const yAxisLabelOffset = 55;

  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  // console.log(data[0]);
  // d["Total Dead and Missing"] = +d["Total Dead and Missing"];
  // d["Reported Date"] = new Date(d["Reported Date"]);

  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const xValue = d => d["Reported Date"];
  const xAxisLabel = "Time";

  const yValue = d => d["Total Dead and Missing"];
  const yAxisLabel = "Total Dead and Missing";

  const xAxisTickFormat = timeFormat("%-m/%-d/%Y");

  // X axis is date, thus use time scale
  const xScale = scaleTime()
    // Domain is an array of actual data, here are a bunch of dates
    // d3.extent returns the minimum and maximum value in the given variable, here are the first and the last of listed dates
    // d3.extent(iterable[, accessor])
    .domain(extent(data, xValue))
    // Range is where the data is shown in pixels, starts from 0 to chart's width
    .range([0, innerWidth])
    .nice();

  // Return the first and the last dates of our data
  const [start, stop] = xScale.domain();

  // Group/bin data by month
  const binnedData = bin()
    // the value to group is xValue, which are dates
    .value(xValue)
    // Domain is the same with xScale
    .domain(xScale.domain())
    // d3.timeMonths(start, stop[, step])
    // This returns an array of grouped data
    .thresholds(timeMonths(start, stop))(data)
    // In each bin, the first value is in x0, the last is in x1
    .map(array => ({
      y: sum(array, yValue),
      x0: array.x0,
      x1: array.x1
    }));

  const yScale = scaleLinear()
    // d3.max(iterable[, accessor])
    .domain([0, max(binnedData, d => d.y)])
    .range([innerHeight, 0])
    .nice();

  // console.log(yScale.domain());

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
          data={binnedData}
          xScale={xScale}
          yScale={yScale}
          innerHeight={innerHeight}
          tooltipFormat={d => d}
          circleRadius={3}
        />
      </g>
    </svg>
  );
};
