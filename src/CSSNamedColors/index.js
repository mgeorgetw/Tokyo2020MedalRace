import { useState, useEffect } from "react";
import { csv, arc, pie } from "d3";
import { message } from "./message";

const width = 300;
const height = 300;
const centerX = width / 2;
const centerY = height / 2;

// A dataset containing named CSS colors.
// From MDN: CSS Colors
const cssNamedColorsCSV =
  "https://gist.githubusercontent.com/BoKyeong-Kim/ac522f3205103f1db0268505d2febd46/raw/cssNamedColors.csv";

export const CSVMetadataDisplay = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(cssNamedColorsCSV).then(setData);
  }, []);

  return <pre>Data is: {data ? message(data) : "Loading..."}</pre>;
};

export const CSSColorsBurstChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    csv(cssNamedColorsCSV).then(setData);
  }, []);

  const pieArc = arc()
    .innerRadius(33)
    .outerRadius(150);

  const colorPie = pie().value(1);

  if (!data) return <pre>"Loading..."</pre>;

  console.log(data[0]);

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${centerX},${centerY})`}>
        {colorPie(data).map((d, index) => (
          <path key={index} fill={d.data["RGB hex value"]} d={pieArc(d)} />
        ))}
      </g>
    </svg>
  );
};
