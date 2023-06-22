import React from "react";
import './header.css';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Header(){
    return ( 
    <div className="header" >
    <div className="header__left">
      

        <MenuIcon />
        <img 
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png?20220605194644" alt=""></img>
        </div>



        <div className="header__input">
        <input type="text" />
        < SearchIcon  className="header__inputButton"/>
        </div>

        <MicIcon className="header__mick"/>



        <div className="header__icons">
        <VideoCallIcon className="header__icon"/>
        <NotificationsIcon className="header__icon"/>
        <AccountCircleIcon className="header__icon"/>
        </div>


    </div>
    );
}


export default Header;