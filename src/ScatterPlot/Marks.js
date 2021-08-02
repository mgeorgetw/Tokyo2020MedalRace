import styles from "./css/ScatterPlot.module.css";
export const Marks = ({
  xScale,
  xValue,
  yScale,
  yValue,
  data,
  tooltipFormat,
  circleRadius = 10,
}) =>
  // The bar itself
  data.map((d, index) => (
    <>
      <circle
        key={index}
        className={styles.marks}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{`${d.entity} has earned ${tooltipFormat(
          xValue(d)
        )} medals, resulting in ${yValue(d)} medals per million people`}</title>
      </circle>
      <text
        x={xScale(xValue(d)) + circleRadius + 3}
        y={yScale(yValue(d))}
        dy=".32em"
        alignmentBaseline="middle"
      >
        {d.entity}
      </text>
    </>
  ));
