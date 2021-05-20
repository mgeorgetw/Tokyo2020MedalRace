import { useRef, useEffect } from "react";
import { select, axisLeft } from "d3";
import styles from "./LineChart.module.css";

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) => {
  const ref = useRef();
  useEffect(() => {
    const yAxisG = select(ref.current);
    const yAxis = axisLeft(yScale)
      .tickSize(innerWidth)
      .tickPadding(tickOffset)
      .ticks(10, "~s"); // This controls log scale ticks format
    yAxisG.call(yAxis);
  }, [yScale, innerWidth, tickOffset]);
  return (
    <g
      ref={ref}
      className={styles.tick}
      transform={`translate(${innerWidth}, 0)`}
    />
  );
};

// import styles from "./LineChart.module.css";
// export const AxisLeft = ({
//   yScale,
//   innerWidth,
//   tickOffset = 3,
//   tooltipFormat
// }) =>
//   // Label for y scale, which is country names
//   yScale.ticks().map(tickValue => (
//     <g
//       key={tickValue}
//       className={styles.tick}
//       transform={`translate(0,${yScale(tickValue)})`}
//     >
//       <line x2={innerWidth} />
//       <text dy=".32em" x={-tickOffset} style={{ textAnchor: "end" }}>
//         {tooltipFormat(tickValue)}
//       </text>
//     </g>
//   ));
