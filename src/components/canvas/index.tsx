import { useEffect, useRef, useState } from 'react';
import { useCanvas } from '../hook/useCanvas';
import classes from './style.module.css';


const Canvas = () => {
    const [posXY, setPosXY] = useState<DOMRect>();
    const { canvas, text } = useCanvas(posXY);
    const ref = useRef<HTMLDivElement>(null);

    canvas.add(text)
    useEffect(() => {
        if (ref.current) {
            setPosXY(ref?.current?.getBoundingClientRect() as DOMRect);
        }
    }, []);

    return (
        <div className={classes.canvasBox} ref={ref}>
            <canvas id="canvas" />
        </div>
    )
}


export default Canvas