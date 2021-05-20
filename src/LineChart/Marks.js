import styles from "./LineChart.module.css";
import { line, curveNatural } from "d3";

export const Marks = ({
  xScale,
  yScale,
  xValue,
  yValue,
  data
  // tooltipFormat,
  // circleRadius = 10
}) => (
  <g className={styles.marks}>
    <path
      d={line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(curveNatural)(data)}
    />
    {/* {data.map((d, index) => ( */}
    {/*   <circle */}
    {/*     key={index} */}
    {/*     cx={xScale(xValue(d))} */}
    {/*     cy={yScale(yValue(d))} */}
    {/*     r={circleRadius} */}
    {/*   > */}
    {/*     <title>{tooltipFormat(xValue(d))}</title> */}
    {/*   </circle> */}
    {/* ))} */}
  </g>
);
