import { useMemo } from "react";
import { Delaunay } from "d3-delaunay";
import styles from "./LineChart.module.css";
export const VoronoiOverlay = ({
  margin,
  allData,
  lineGenerator,
  onHover,
  innerWidth,
  innerHeight
}) => {
  return useMemo(() => {
    const points = allData.map(d => [
      lineGenerator.x()(d),
      lineGenerator.y()(d)
    ]);
    const delaunay = Delaunay.from(points);
    const voronoi = delaunay.voronoi([
      0,
      0,
      innerWidth + margin.right,
      innerHeight
    ]);
    return (
      <g className={styles.voronoi}>
        {points.map((point, i) => (
          <path
            onMouseEnter={() => onHover(allData[i])}
            d={voronoi.renderCell(i)}
          />
        ))}
      </g>
    );
  }, [allData, lineGenerator, innerHeight, innerWidth, onHover]);
};
