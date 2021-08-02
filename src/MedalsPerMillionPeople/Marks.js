import React from "react";
import styles from "./css/BarChart.module.css";
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
  hoveredValue,
  fadeOpacity = 0.2,
  labelOffset = 10,
  tooltipOffset = 22,
}) =>
  data.map((d, i) => (
    <g
      className={styles.marks}
      key={yValue(d)}
      onMouseEnter={() => onHover(yValue(d))}
      onMouseLeave={() => onHover(null)}
      opacity={hoveredValue && hoveredValue !== yValue(d) ? fadeOpacity : 1}
    >
      <rect
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
        fill={
          view === "mpm"
            ? colorScale((data.length - i) / data.length)
            : "orange"
        }
      />
      <text
        className={styles.tooltipStroke}
        x={xScale(xValue(d)) + labelOffset}
        y={yScale(yValue(d)) + yScale.bandwidth() / 2}
        dy=".42em"
        alignmentBaseline="middle"
      >
        {tooltipFormat(xValue(d))}
      </text>
      <text
        className={styles.tooltip}
        x={xScale(xValue(d)) + labelOffset}
        y={yScale(yValue(d)) + yScale.bandwidth() / 2}
        dy=".42em"
        alignmentBaseline="middle"
      >
        {tooltipFormat(xValue(d))}
      </text>
      {hoveredValue && hoveredValue === yValue(d) ? (
        <>
          <text
            className={styles.tooltipStroke}
            x={xScale(xValue(d)) + labelOffset + 32}
            y={yScale(yValue(d)) + yScale.bandwidth() / 2}
            dy=".42em"
          >
            {`/ ${d.medals.toLocaleString()} ${
              d.medals > 1 ? "medals" : "medal"
            } won`}
          </text>
          <text
            className={styles.tooltip}
            x={xScale(xValue(d)) + labelOffset + 32}
            y={yScale(yValue(d)) + yScale.bandwidth() / 2}
            dy=".42em"
          >
            {`/ ${d.medals.toLocaleString()} ${
              d.medals > 1 ? "medals" : "medal"
            } won`}
          </text>
        </>
      ) : null}
    </g>
  ));
