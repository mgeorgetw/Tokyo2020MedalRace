import { useState, useEffect } from "react";
import { csv } from "d3";

// Data: Missing Migrants
export const useData = () => {
  const csvUrl =
    "https://gist.githubusercontent.com/curran/a9656d711a8ad31d812b8f9963ac441c/raw/c22144062566de911ba32509613c84af2a99e8e2/MissingMigrants-Global-2019-10-08T09-47-14-subset.csv";
  const [data, setData] = useState(null);
  if (data) console.log(data[0]);

  useEffect(() => {
    const row = d => {
      // + = parseFloat()
      d["Total Dead and Missing"] = +d["Total Dead and Missing"];
      d["Reported Date"] = new Date(d["Reported Date"]);
      return d;
    };
    // I only want the top 10 countries
    csv(csvUrl, row).then(setData);
  }, []);
  return data;
};
