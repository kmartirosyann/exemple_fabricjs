import { fabric } from 'fabric';
import { useEffect, useRef, useState } from 'react';
import classes from './style.module.css';


type Props = {
    size: number,
    position: string,
}

const Container = ({ size, position }: Props) => {
    const [posXY, setPosXY] = useState<DOMRect>();

    const ref = useRef<HTMLDivElement>(null);

    const alignText = { left: 800, originX: "left", originY: 'top', top: 60 };

    const canvas = new fabric.Canvas('canvas', {
        width: posXY?.width,
        height: posXY?.height,

    });

    const text = new fabric.Text("Type your text", {
        left: 0,
        fontSize: size,
    });

    canvas.add(text);


    const rect = text.getBoundingRect();
 
    if (posXY) {
        if (position === 'center') {
            canvas.centerObject(text);
        }
        if (position === 'right') {
            alignText.left = posXY.width
            alignText.top = 0
            alignText.originX = 'right'
            text.set(alignText);
        }
        if (position === 'bottom') {
            alignText.left = posXY.width
            alignText.top = Math.floor(posXY.height - rect.height)
            alignText.originX = 'right'
            text.set(alignText);

        }
        if (position === 'top') {
            alignText.left = 0
            alignText.top = Math.floor(posXY.height - rect.height)
            alignText.originX = 'left'
            text.set(alignText);

        }
        if (position === 'vertikalCenter') {
            canvas.viewportCenterObjectV(text);
        }
        if (position === 'horizontalCenter') {
            canvas.viewportCenterObjectH(text);
        }
    }


    useEffect(() => {
        if (ref.current) {
            setPosXY(ref?.current?.getBoundingClientRect() as DOMRect);
        }
    }, []);

    return (
        <div className={classes.canvasBox} ref={ref}>
            <canvas id="canvas" style={{ border: "1px solid #000" }} />
        </div>
    )
}


export default Container