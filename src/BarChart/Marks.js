import styles from "./BarChart.module.css";
export const Marks = ({
  xScale,
  xValue,
  yScale,
  yValue,
  data,
  tooltipFormat
}) => (
  <g className={styles.marks}>
    {data.map(d => (
      <rect
        key={yValue(d)}
        x={0}
        y={yScale(yValue(d))}
        width={xScale(xValue(d))}
        height={yScale.bandwidth()}
      >
        <title>{tooltipFormat(xValue(d))}</title>
      </rect>
    ))}
  </g>
);
