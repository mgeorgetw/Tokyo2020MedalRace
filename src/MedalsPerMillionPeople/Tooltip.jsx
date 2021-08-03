import chartStyles from "./css/BarChart.module.css";
export const Tooltip = ({ hoveredValue, data, points, labelOffset }) => {
  const d = data.find((obj) => obj.entity === hoveredValue);
  console.log(points);
  return (
    <g>
      <text
        className={chartStyles.tooltipStroke}
        x={points[0] + labelOffset}
        y={points[1]}
        dy=".42em"
      >
        <tspan x={points[0] + labelOffset}>
          {`${
            d.medals > 1 ? "Medals" : "Medal"
          }: ${d.medals.toLocaleString()} `}
        </tspan>
        <tspan
          x={points[0] + labelOffset}
          dy="1.3em"
        >{`Population: ${d.population.toLocaleString()}`}</tspan>
      </text>
      <text
        className={chartStyles.tooltip}
        x={points[0] + labelOffset}
        y={points[1]}
        dy=".42em"
      >
        <tspan x={points[0] + labelOffset}>
          {`${
            d.medals > 1 ? "Medals" : "Medal"
          }: ${d.medals.toLocaleString()} `}
        </tspan>
        <tspan
          x={points[0] + labelOffset}
          dy="1.3em"
        >{`Population: ${d.population.toLocaleString()}`}</tspan>
      </text>
    </g>
  );
};
