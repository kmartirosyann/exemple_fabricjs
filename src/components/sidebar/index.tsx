import React, { useContext } from 'react';
import { COOSE_TEXT_FONTSIZE } from '../../context/actions';
import { MovieContext } from '../../context/MovieContext';
import classes from './style.module.css';


const Sidebar = () => {
    const { dispatch } = useContext(MovieContext);

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const { id } = e.target as HTMLElement

        dispatch({
            type: COOSE_TEXT_FONTSIZE,
            payload: id,
        });
    };

    return (
        <main className={classes.sidebar}>
            <h1 className={classes.item} id='72' onClick={handleClick}>Add headline</h1>
            <h3 className={classes.item} id='46' onClick={handleClick}>Add headline</h3>
            <h5 className={classes.item} id='28' onClick={handleClick}>Add headline</h5>
        </main>
    )
};

export default Sidebar