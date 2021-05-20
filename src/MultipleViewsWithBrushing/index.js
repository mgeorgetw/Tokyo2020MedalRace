import { useState } from "react";
import { useWorldAtlas } from "./useWorldAtlas";
import { useMigrants } from "./useMigrants";
import { BubbleMap } from "./BubbleMap/index";
import { DateHistogram } from "./DateHistogram/index";

const width = 960;
const height = 530;
const dateHistogramSize = 0.2;
const xValue = d => d["Reported Date"];

export const MultipleViewsWithBrushing = () => {
  const worldAtlas = useWorldAtlas();
  const data = useMigrants();
  const [brushExtent, setBrushExtent] = useState();

  if (!worldAtlas || !data) return <pre>"Loading..."</pre>;
  // console.log(data);

  // If the user brushs the histogram, show data between brush extent on the map
  const filteredData = brushExtent
    ? data.filter(d => {
        const date = xValue(d);
        return date > brushExtent[0] && date < brushExtent[1];
      })
    : // When there is no brush, show all data on the map
      data;

  return (
    <svg width={width} height={height}>
      <BubbleMap
        worldAtlas={worldAtlas}
        data={data}
        filteredData={filteredData}
      />
      {/*  height counts from top of the screen to the bottom, therefore this will */}
      {/* place histogram at the bottom of the scren */}
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  );
};
