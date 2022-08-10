import { fabric } from 'fabric';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { MovieContext } from '../../context/MovieContext';

type IProps = {
    left: number,
    top: number,
}

const initialeStyle: IProps = {
    left: 0,
    top: 0,
}


export const useCanvas = (posXY: DOMRect | undefined) => {
    const { state } = useContext(MovieContext);
    const { fontSize, value } = state;


    const canvas = new fabric.Canvas('canvas', {
        width: posXY?.width,
        height: posXY?.height,
    }
    );


    const text = useMemo(() => new fabric.Textbox(
        "Type your text",
        {
            left: 0,
            top: 0,
            fontSize,
        })
        , [fontSize]);

    const rect = text.getBoundingRect();


    const position = useCallback((style: string) => {
        if (!posXY) return
        switch (style) {
            case "left": {
                initialeStyle.left = 0;
                return text.set(initialeStyle);
            }
            case "top": {
                initialeStyle.top = 0;
                return text.set(initialeStyle);
            }
            case "bottom": {
                initialeStyle.top = posXY?.height - rect.height;
                return text.set(initialeStyle);
            }
            case "right": {
                initialeStyle.left = posXY.width - rect.width;
                return text.set(initialeStyle);
            }
            case "vertical": {
                initialeStyle.top = (posXY.height - rect.height) / 2;
                return text.set(initialeStyle);
            }
            case "horizontal": {
                initialeStyle.left = (posXY.width - rect.width) / 2;
                return text.set(initialeStyle);
            }
            case "center": {
                initialeStyle.left = (posXY.width - rect.width) / 2;
                initialeStyle.top = (posXY.height - rect.height) / 2;
                return text.set(initialeStyle);
            }
        }

    }, [rect, posXY, text]);

    useEffect(() => { position(value) }, [value, position]);

    return { canvas, text };
}