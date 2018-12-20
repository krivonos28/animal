import { NavLink } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa'
import React from 'react'
import { IconContext } from "react-icons";

import './css/main-menu.css'


//import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
const selectedStyle = {
    backgroundColor: "green",
    color: "slategray",
    dispaly: "inline-block",
}
export const MainMenu = () => {
    return (
        <nav className="main-menu">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-2"><NavLink to="/">
           <FaBeer size={32} color = {'red'} className ={"bear"}/>
            </NavLink></div>
        <div className="col-2"><NavLink to="/animals" activeStyle={selectedStyle}>
                <button>animals</button>
        </NavLink></div>
        <div className="col-2"> <NavLink to="/animals/add" activeStyle={selectedStyle}>
                [ADD]
        </NavLink></div>
        <div className="col-2"> <NavLink to="/animals/testform" activeStyle={selectedStyle}>
                TestForm
        </NavLink></div>
        <div className="col-2"> <NavLink to="/animals/testpage" activeStyle={selectedStyle}>
                TestPage
        </NavLink></div>
        </div>
        
        </div>
            
            
           
            
        </nav>
    )

}