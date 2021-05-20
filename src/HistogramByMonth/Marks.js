export const Marks = ({ xScale, yScale, data, tooltipFormat, innerHeight }) => (
  <g className="marks">
    {data.map((d, index) => (
      <rect
        key={index}
        x={xScale(d.x0)}
        y={yScale(d.y)}
        width={xScale(d.x1) - xScale(d.x0)}
        height={innerHeight - yScale(d.y)}
      >
        <title>{tooltipFormat(d.y)}</title>
      </rect>
    ))}
  </g>
);
