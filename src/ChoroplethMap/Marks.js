import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
const missingDataColor = "gray";

export const Marks = ({
  worldAtlas: { countries, interiors },
  rowByNumericCode,
  colorScale,
  colorValue
}) => {
  const projection = geoNaturalEarth1();
  const path = geoPath(projection); // creates a new geographic path generator
  const graticule = geoGraticule(); // generates a GeoJSON graticule
  return (
    <g className="marks">
      <path className="sphere" d={path({ type: "Sphere" })} />
      <path className="graticules" d={path(graticule())} />
      {countries.features.map((feature, i) => {
        // geoJSON uses ISO 3166-1 numeric country codes,
        // but our data offers alpha-3 codes
        const d = rowByNumericCode.get(feature.id);
        return (
          <path
            fill={d ? colorScale(colorValue(d)) : missingDataColor}
            key={i}
            d={path(feature)}
          />
        );
      })}
      <path className="interiors" d={path(interiors)} />
    </g>
  );
};
