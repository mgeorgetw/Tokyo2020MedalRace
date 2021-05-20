import { useMemo } from "react";
import { geoNaturalEarth1, geoPath, geoGraticule } from "d3";
import styles from "./BubbleMap.module.css";

const projection = geoNaturalEarth1();
const path = geoPath(projection);
const graticule = geoGraticule();

export const Marks = ({
  worldAtlas: { land, interiors },
  data,
  sizeScale,
  sizeValue
}) => {
  return (
    <g className={styles.marks}>
      {useMemo(
        () => (
          <>
            <path className={styles.sphere} d={path({ type: "Sphere" })} />
            <path className={styles.graticules} d={path(graticule())} />
            {land.features.map((feature, i) => (
              <path className={styles.land} key={i} d={path(feature)} />
            ))}
            <path className={styles.interiors} d={path(interiors)} />
          </>
        ),
        [land, interiors]
      )}
      {data.map((d, i) => {
        const [x, y] = projection(d.coords);
        return <circle key={i} cx={x} cy={y} r={sizeScale(sizeValue(d))} />;
      })}
    </g>
  );
};
