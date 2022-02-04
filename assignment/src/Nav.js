import React from 'react';
import './Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import NavContents from "./NavContents";
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
function Nav() {
  return(

    <div className="nav_container">

        <div className="nav_left">
            <div className="nav_icon">
                <NavContents Icon={MenuIcon} title=""/>
            </div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1024px-Gmail_icon_%282020%29.svg.png"></img>
            
            <div className="Search_box">
                <SearchIcon/>
                <input type="text" placeholder="Search"/>
                </div>
             </div>
             <div className="nav_right">
                 <NavContents Icon={SettingsIcon} title=""/>
                 <NavContents Icon={AppsIcon} title="My Network"/>
                 <NavContents Icon={ContactSupportIcon} title="Jobs"/>
                 <NavContents avatar title="Me"/>





             </div>
        </div>     

    )
}

export default Nav;
