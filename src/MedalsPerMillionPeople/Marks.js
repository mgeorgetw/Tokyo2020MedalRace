import React from "react";
import { pointer } from "d3";
import chartStyles from "./css/BarChart.module.css";
export const Marks = ({
  view,
  data,
  xScale,
  xValue,
  yScale,
  yValue,
  colorScale,
  tooltipFormat,
  onHover,
  onMove,
  hoveredValue,
  fadeOpacity = 0.2,
  tooltipOffset = 10,
}) =>
  data.map((d, i) => (
    <g
      className={chartStyles.marks}
      key={yValue(d)}
      onMouseEnter={() => onHover(yValue(d))}
      onMouseLeave={() => onHover(null)}
      onPointerMove={(event) => {
        onHover(yValue(d));
        onMove(pointer(event));
      }}
      opacity={hoveredValue && hoveredValue !== yValue(d) ? fadeOpacity : 1}
    >
      <rect
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
        fill={colorScale((data.length - i) / data.length)}
      />
      <text
        className={chartStyles.tooltipStroke}
        x={xScale(xValue(d)) + tooltipOffset}
        y={yScale(yValue(d)) + yScale.bandwidth() / 2}
        dominantBaseline="central"
      >
        {tooltipFormat(xValue(d))}
      </text>
      <text
        className={chartStyles.tooltip}
        x={xScale(xValue(d)) + tooltipOffset}
        y={yScale(yValue(d)) + yScale.bandwidth() / 2}
        dominantBaseline="central"
      >
        {tooltipFormat(xValue(d))}
      </text>
    </g>
  ));
