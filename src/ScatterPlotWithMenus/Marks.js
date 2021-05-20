export const Marks = ({
  xScale,
  xValue,
  yScale,
  yValue,
  colorScale,
  colorValue,
  data,
  tooltipFormat,
  circleRadius = 10
}) =>
  // The bar itself
  data.map((d, index) => (
    <circle
      key={index}
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      fill={colorScale(colorValue(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
