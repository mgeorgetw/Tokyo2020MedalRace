const { vl } = window;

export const viz = vl.markCircle({ size: 9000, opacity: 0.2 }).encode(
  vl.x().fieldN("origin"),
  vl
    .y()
    .fieldQ("horsepower")
    .scale({ zero: false }),
  vl.color().fieldQ("weight"),
  vl.tooltip().fieldN("name")
);
