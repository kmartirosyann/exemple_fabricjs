import React from 'react';
import classes from './style.module.css';

type Props = {
    handelChooseText: (fontSize: number) => void;
}

const Sidebar = ({ handelChooseText }: Props) => {

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        const { id } = e.target as any
        return handelChooseText(Number(id));
    }

    return (
        <main className={classes.sidebar}>
            <h1 className={classes.item} id='72' onClick={handleClick}>Add headline</h1>
            <h3 className={classes.item} id='46' onClick={handleClick}>Add headline</h3>
            <h5 className={classes.item} id='28' onClick={handleClick}>Add headline</h5>
        </main>
    )
}

export default Sidebar