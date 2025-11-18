import { log } from "console";
import  { useCallback } from "react";

type Props = {};

export const DrawArea = ({} :Props) => {

    // Handle mouse down event
  const onMouseDown = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    // canvas.drawing = true;
    const canvas = event.currentTarget;
    log(canvas);
    console.log("Mouse down at:", event.clientX, event.clientY);
    
  
  }, []);
  return (
    <div>
      <canvas onMouseDown={onMouseDown} className="canvas" style={{backgroundColor: "lightgrey", width:500, height:300}} id="canvas"></canvas>
    </div>
  );
}



