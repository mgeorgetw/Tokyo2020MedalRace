export const ColorLegend = ({
  colorScale,
  tickSpacing = 20,
  tickSize = 10,
  tickTextOffset = 20,
  onHover,
  hoveredValue,
  fadeOpacity = 0.2
}) =>
  colorScale.domain().map((domainValue, index) => (
    <g
      className="tick"
      transform={`translate(0, ${index * tickSpacing})`}
      onMouseEnter={() => onHover(domainValue)}
      onMouseLeave={() => onHover(null)}
      opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
    >
      <circle fill={colorScale(domainValue)} r={tickSize}></circle>
      <text dy=".32em" x={tickTextOffset}>
        {domainValue}
      </text>
    </g>
  ));
