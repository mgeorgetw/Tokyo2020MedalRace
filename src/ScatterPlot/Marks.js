import styles from "./ScatterPlot.module.css";
export const Marks = ({
  xScale,
  xValue,
  yScale,
  yValue,
  data,
  tooltipFormat,
  circleRadius = 10
}) =>
  // The bar itself
  data.map((d, index) => (
    <circle
      key={index}
      className={styles.marks}
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
