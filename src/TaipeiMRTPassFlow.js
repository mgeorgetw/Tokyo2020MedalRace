import { sum } from "d3";
import { useData } from "./useData";

export const TaipeiMRTPassFlow = () => {
  const data = useData();
  if (!data) return <pre>"Loading..."</pre>;
  // console.log(data[0]);

  const station = "忠孝復興";
  const time_range = Array.from(Array(24).keys());

  console.time("filter time");
  const conditions = time_range.map(range => item => {
    if (item["進站"] !== station && item["出站"] !== station) return false;
    if (item["時段"] !== range) return false;
    if (item["日期"] === "2021-03-03") return true;
  });
  const results = conditions.map(condition => data.filter(condition));
  console.timeEnd("filter time");
  // console.log(results);
  return (
    <>
      {results.map(result =>
        result.length ? (
          <pre key={result[0]["時段"]}>
            {result[0]["時段"]}點，{station}站進出站人次：
            {sum(result, d => d["人次"])}
          </pre>
        ) : null
      )}
    </>
  );
};
