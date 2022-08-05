import React, { FC } from 'react';
import classes from "./style.module.css";

type Iprops ={
    handlePosition:(arg0:string)=>void,
}

const NavBar:FC<Iprops> = ({handlePosition}) => {

     const handleChangePos =(e:React.ChangeEvent<HTMLSelectElement>)=>{
         const {value}=e.target
         handlePosition(value);
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
                    <option value='vertikalCenter'>Align Vertikal</option>
                    <option value='horizontalCenter'>Align Horizontal</option>
                </select>
            </nav>
        </header>
    )
}

export default NavBar