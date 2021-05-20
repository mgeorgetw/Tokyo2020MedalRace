import { useMemo } from "react";
import { scaleSqrt, max } from "d3";
import { Marks } from "./Marks";

const sizeValue = d => d["Total Dead and Missing"];
const maxRadius = 15;

export const BubbleMap = ({ worldAtlas, data, filteredData }) => {
  // scaleSqrt() is used to determine the radius of a disk
  const sizeScale = useMemo(
    () =>
      scaleSqrt()
        .domain([0, max(data, sizeValue)])
        .range([0, maxRadius]),
    [data]
  );
  return (
    <Marks
      worldAtlas={worldAtlas}
      data={filteredData}
      sizeScale={sizeScale}
      sizeValue={sizeValue}
    />
  );
};
