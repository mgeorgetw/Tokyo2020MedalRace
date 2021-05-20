import { useWorldAtlas } from "./useWorldAtlas";
import { useMigrants } from "./useMigrants";
import { BubbleMap } from "./BubbleMap/index";
import { DateHistogram } from "./DateHistogram/index";

const width = 960;
const height = 530;
const dateHistogramSize = 0.2;

export const WorldMapPlusHistogram = () => {
  const worldAtlas = useWorldAtlas();
  const data = useMigrants();

  if (!worldAtlas || !data) return <pre>"Loading..."</pre>;

  // console.log(data);

  return (
    <svg width={width} height={height}>
      <BubbleMap worldAtlas={worldAtlas} data={data} />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
        />
      </g>
    </svg>
  );
};
