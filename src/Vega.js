// import vega from "vega";
// import vegaLite from "vega-lite";
// import vl from "vega-lite-api";
import { config } from "./config";
import { getData } from "./getData";
import { viz } from "./viz";

const { vega, vegaLite, vl, vegaTooltip } = window;
const { Handler } = vegaTooltip;

export const Vega = () => {
  vl.register(vega, vegaLite, {
    view: { renderer: "svg" },
    init: view => {
      view.tooltip(new Handler().call);
    }
  });

  const run = async () => {
    const marks = viz
      .data(await getData())
      .width(window.innerWidth)
      .height(window.innerHeight)
      .autosize({ type: "fit", contains: "padding" })
      .config(config);

    document.body.appendChild(await marks.render());
  };
  run();
  return;
};
