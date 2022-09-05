import chartStyles from "./css/BarChart.module.css";
export const Tooltip = ({ hoveredValue, data, points, tooltipOffset }) => {
  const d = data.find((obj) => obj.entity === hoveredValue);
  return (
    <g>
      <text
        className={chartStyles.tooltipStroke}
        x={points[0] + tooltipOffset}
        y={points[1]}
        dy=".42em"
      >
        <tspan x={points[0] + tooltipOffset}>
          {`${
            d.medals > 1 ? "Medals" : "Medal"
          }: ${d.medals.toLocaleString()} `}
        </tspan>
        <tspan
          x={points[0] + tooltipOffset}
          dy="1.3em"
        >{`Population: ${d.population.toLocaleString()}`}</tspan>
      </text>
      <text
        className={chartStyles.tooltip}
        x={points[0] + tooltipOffset}
        y={points[1]}
        dy=".42em"
      >
        <tspan x={points[0] + tooltipOffset}>
          {`${
            d.medals > 1 ? "Medals" : "Medal"
          }: ${d.medals.toLocaleString()} `}
        </tspan>
        <tspan
          x={points[0] + tooltipOffset}
          dy="1.3em"
        >{`Population: ${d.population.toLocaleString()}`}</tspan>
      </text>
    </g>
  );
};
