import { useWorldAtlas } from "./useWorldAtlas";
import { useCities } from "./useCities";
import { Marks } from "./Marks";
import { scaleSqrt, max } from "d3";

export const WorldMap = () => {
  const width = "960";
  const height = "500";

  const worldAtlas = useWorldAtlas();
  const cities = useCities();

  if (!worldAtlas || !cities) return <pre>"Loading..."</pre>;

  // console.log(cities);

  const sizeValue = d => d.population;
  const maxRadius = 15;

  const sizeScale = scaleSqrt()
    .domain([0, max(cities, sizeValue)])
    .range([0, maxRadius]);

  return (
    <svg width={width} height={height}>
      <Marks
        worldAtlas={worldAtlas}
        cities={cities}
        sizeScale={sizeScale}
        sizeValue={sizeValue}
      />
    </svg>
  );
};
