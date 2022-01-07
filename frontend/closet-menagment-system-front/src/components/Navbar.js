import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { SideBarData } from './SideBarData';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

const Navbar = () => {
    const [sideBar, setSideBar] = useState(false);

    const showSidebar = () => setSideBar(!sideBar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff' }}>
                <div className='navbar'>
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineCloseSquare/>
                            </Link>
                        </li>
                        {SideBarData.map((item, index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                            );
                        })}
                    </ul>
                </nav>
        </IconContext.Provider>
        </>
        
    )
}

export default Navbar
