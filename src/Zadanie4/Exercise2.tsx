import { useState } from "react";

type SingleBox = {
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  borderRadius: number;
};

export const Exercise2 = () => {
  const [boxes, setBoxes] = useState<SingleBox[]>([]);

  const addBox = () => {
    const x = Math.round(Math.random() * 1000);
    const y = Math.round(Math.random() * 1000);
    const size = Math.round(Math.random() * 100);
    const rotation = Math.round(Math.random() * 360);
    const borderRadius = Math.round(Math.random() * 100);
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    const newBox: SingleBox = {
      x,
      y,
      size,
      rotation,
      borderRadius,
      color: `rgb(${r},${g},${b})`,
    };
  };

  return (
    <>
      <button onClick={addBox}>Add random box</button>
      <div style={{ position: "relative", width: 1000, height: 1000 }}>
        {boxes.map(({ size, x, y, rotation, color, borderRadius }, index) => (
          <div
            key={index}
            style={{
              backgroundColor: color,
              width: size,
              height: size,
              borderRadius: `${borderRadius}%`,
              position: "absolute",
              top: y,
              left: x,
              transform: `translate(-50%) rotate(${rotation}deg)`,
              transformOrigin: "50%",
            }}
          />
        ))}
      </div>
    </>
  );
};
