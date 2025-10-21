import  { useCallback } from "react";

type Props = {};

export const DrawArea = ({} :Props) => {

    // Handle mouse down event
  const onMouseDown = useCallback((event: React.MouseEvent<HTMLCanvasElement>) => {
    // canvas.drawing = true;
    const d = document.getElementById("canvas");
    const topPos = d.offsetTop;

if (topPos > 400){
    
}


    console.log("Mouse down at:", event.clientX, event.clientY);
    
  
  }, []);
  return (
    <div>
      <canvas onMouseDown={onMouseDown} className="canvas" style={{backgroundColor: "lightgrey", width:500, height:300}} id="canvas"></canvas>
    </div>
  );
}



