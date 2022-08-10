import React, { useContext } from 'react';
import { SET_DATA } from '../../context/actions';
import { MovieContext } from '../../context/MovieContext';
import classes from './style.module.css';


const NavBar = () => {
    const { dispatch } = useContext(MovieContext)

    const handleChangePos = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        dispatch({
            type: SET_DATA,
            payload: value
        })
    };

    return (
        <header>
            <nav className={classes.navBar}>
                <h3>Home</h3>
                <select
                    className={classes.chooseItem}
                    onChange={handleChangePos}
                >
                    <option value='center'>--Plase choose an option--</option>
                    <option value='left'>Aling Left</option>
                    <option value='right'>Aling Rigth</option>
                    <option value='bottom'>Aling Bottom</option>
                    <option value='top'>Aling Top</option>
                    <option value='vertical'>Align Vertikal</option>
                    <option value='horizontal'>Align Horizontal</option>
                </select>
            </nav>
        </header>
    )
}

export default NavBar