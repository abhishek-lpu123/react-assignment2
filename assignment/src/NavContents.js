import React from 'react';
import './NavContents.css'
import {Avatar} from '@material-ui/core';

function NavContents({Icon, title, avatar}) {
    return (<div className='navContents_container'>
              {Icon && <Icon className='navContents_icon'/> }
              {avatar && <Avatar/>}
    </div>)
}
export default NavContents;