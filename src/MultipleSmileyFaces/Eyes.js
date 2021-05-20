export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  <>
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius - 3} fill="cyan" />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius - 3} fill="cyan" />
  </>
);
