import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Add Clothes',
        path: '/addclothes',
        icon: <FaIcons.FaTshirt/>,
        cName: 'nav-text'
    },
    {
        title: 'Collections',
        path: '/collections',
        icon: <FaIcons.FaTshirt/>,
        cName: 'nav-text'
    },
    {
        title: 'Create Collections',
        path: '/createcollection',
        icon: <FaIcons.FaTshirt/>,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/usersettings',
        icon: <AiIcons.AiFillSetting/>,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/loginpage',
        icon: <AiIcons.AiOutlineLogin/>,
        cName: 'nav-text'
    }
]