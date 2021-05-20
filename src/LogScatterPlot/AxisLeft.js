import styles from "./ScatterPlot.module.css";
// Axis for logScale
// Shows label only when tickFormat() is available
// tickFormat() returns scientific notations like "1e+0".
// To use normal values, a conditional is added on yScale.tickFormat()
export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map(tickValue => (
    <g
      key={tickValue}
      className={styles.tick}
      transform={`translate(0,${yScale(tickValue)})`}
    >
      <line x2={innerWidth} />
      {yScale.tickFormat()(tickValue) ? (
        <text dy=".32em" x={-tickOffset} style={{ textAnchor: "end" }}>
          {tickValue}
        </text>
      ) : null}
    </g>
  ));
