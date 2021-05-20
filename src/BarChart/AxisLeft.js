import styles from "./BarChart.module.css";
export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  // Label for y scale, which is country names
  yScale.domain().map(tickValue => (
    <g
      key={tickValue}
      className={styles.tick}
      transform={`translate(0,${yScale(tickValue) + yScale.bandwidth() / 2})`}
    >
      <line x2={innerWidth} />
      <text dy=".32em" x={-tickOffset} style={{ textAnchor: "end" }}>
        {tickValue}
      </text>
    </g>
  ));
