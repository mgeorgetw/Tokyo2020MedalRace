import { useRef, useEffect, useMemo } from "react";
import { scaleLinear, scaleTime, extent } from "d3";
import { Marks } from "./Marks";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { sum, bin, max, timeMonths, timeFormat, brushX, select } from "d3";
import styles from "./DateHistogram.module.css";

const margin = { top: 0, right: 20, bottom: 20, left: 50 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 30;
const xAxisTickFormat = timeFormat("%-m/%-d/%Y");
const xAxisLabel = "Time";
const yValue = d => d["Total Dead and Missing"];
const yAxisLabel = "Total Dead and Missing";

export const DateHistogram = ({
  data,
  height,
  width,
  setBrushExtent,
  xValue
}) => {
  // The chart's real height and width
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  // X axis is date, thus use time scale
  const xScale = useMemo(
    () =>
      scaleTime()
        // Domain is an array of actual data, here are a bunch of dates
        // d3.extent returns the minimum and maximum value in the given variable, here are the first and the last of listed dates
        // d3.extent(iterable[, accessor])
        .domain(extent(data, xValue))
        // Range is where the data is shown in pixels, from 0 to chart's width
        .range([0, innerWidth])
        .nice(),
    [data, xValue, innerWidth]
  );

  // Group/bin data by month
  const binnedData = useMemo(() => {
    // Return the first and the last dates of our data
    const [start, stop] = xScale.domain();
    return (
      bin()
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
        }))
    );
  }, [xValue, xScale, data]);

  const yScale = useMemo(
    () =>
      scaleLinear()
        // d3.max(iterable[, accessor])
        .domain([0, max(binnedData, d => d.y)])
        .range([innerHeight, 0])
        .nice(),
    [binnedData, innerHeight]
  );

  const brushRef = useRef();

  useEffect(() => {
    const brush = brushX().extent([
      [0, 0],
      [innerWidth, innerHeight]
    ]);
    brush(select(brushRef.current));
    brush.on("brush end", event => {
      // event.selection returns specific pixels of current brush
      // xScale.invert() can get the domain from the given pixel
      setBrushExtent(event.selection && event.selection.map(xScale.invert));
    });
  }, [innerWidth, innerHeight, setBrushExtent, xScale.invert]);
  return (
    <>
      <rect width={width} height={height} fill="white" />
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
        <g ref={brushRef} />
      </g>
    </>
  );
};
