import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/0ac4077c7fc6390f5dd33bf5c06cb5ff/raw/605c54080c7a93a417a3cea93fd52e7550e76500/UN_Population_2019.csv";

// Data: Missing Migrants
export const useData = () => {
  const [data, setData] = useState(null);
  if (data) console.log(data[0]);

  useEffect(() => {
    const row = d => {
      // + = parseFloat()
      d.Population = +d["2020"] * 1000;
      return d;
    };
    // I only want the top 10 countries
    csv(csvUrl, row).then(d => setData(d.slice(0, 10)));
  }, []);
  return data;
};
