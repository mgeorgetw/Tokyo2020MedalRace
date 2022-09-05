// import styles from "./css/ScatterPlot.module.css";
import { max } from "d3";
export const Marks = ({
  xScale,
  xValue,
  yScale,
  yValue,
  data,
  tooltipFormat,
  colorScale,
  circleRadius = 10,
  onHover,
  hoveredValue,
  fadeOpacity = 0.2,
}) =>
  data.map((d, index) => (
    <g
      key={`mark${index}`}
      onMouseEnter={() => onHover(yValue(d))}
      onMouseLeave={() => onHover(null)}
      onPointerMove={() => {
        onHover(yValue(d));
      }}
      opacity={hoveredValue && hoveredValue !== yValue(d) ? fadeOpacity : 1}
    >
      <circle
        fill={colorScale((data.length - index) / data.length)}
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={circleRadius}
      >
        <title>{`${d.entity} has earned ${tooltipFormat(
          xValue(d)
        )} medals, resulting in ${yValue(d)} medals per million people`}</title>
      </circle>

      <text
        x={
          xScale(xValue(d)) > xScale(max(data, xValue)) * 0.9
            ? xScale(xValue(d)) - circleRadius - 3
            : xScale(xValue(d)) + circleRadius + 3
        }
        y={yScale(yValue(d))}
        dominantBaseline="central"
        textAnchor={
          xScale(xValue(d)) > xScale(max(data, xValue)) * 0.9 ? "end" : "start"
        }
      >
        {d.entity}
      </text>
    </g>
  ));
