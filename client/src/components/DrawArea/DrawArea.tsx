import { useRef, useState } from "react";

export const DrawArea = () => {
  const canvas = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);

  const start = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const ctx = canvas.current!.getContext("2d")!;
    ctx.beginPath(); 
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); 
    setDrawing(true);
    console.log("x",e.nativeEvent.offsetX,"y", e.nativeEvent.offsetY);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;
    const ctx = canvas.current!.getContext("2d")!;
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY); 
    ctx.stroke(); 
    // console.log("x",e.nativeEvent.offsetX,"y", e.nativeEvent.offsetY);
  };

  const end = () => setDrawing(false);

  return (
    <canvas
      ref={canvas}
      width={500}
      height={300}
      style={{ background: "lightgrey", border: "1px solid black" }}
      onMouseDown={start}
      onMouseMove={draw}
      onMouseUp={end}
      onMouseLeave={end}
    />
  );
};
