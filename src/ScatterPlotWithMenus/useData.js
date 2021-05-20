import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/a08a1080b88344b0c8a7/raw/639388c2cbc2120a14dcf466e85730eb8be498bb/iris.csv";

// Data: Flowers Data
export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = d => {
      // + = parseFloat()
      d.sepal_length = +d.sepal_length;
      d.sepal_width = +d.sepal_width;
      d.petal_length = +d.petal_length;
      d.petal_width = +d.petal_width;
      return d;
    };
    // I only want the top 10 countries
    csv(csvUrl, row).then(setData);
  }, []);
  return data;
};
