import { Face } from "./Face";
import { range } from "d3";

const width = 760;
const height = 350;
const faces = range(1);

export const MultipleSmileyFaces = () =>
  faces.map(() => (
    <Face
      width={width}
      height={height}
      centerX={width / 2}
      centerY={height / 2}
      strokeWidth={2 + Math.random() * 10}
      eyeOffsetX={60 + Math.random() * 10}
      eyeOffsetY={80 + Math.random() * 10}
      eyeRadius={30 + Math.random() * 6}
      mouthWidth={5 + Math.random() * 5}
      mouthRadius={100 + Math.random() * 10}
    />
  ));
