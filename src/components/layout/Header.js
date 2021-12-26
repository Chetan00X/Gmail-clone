import React from "react";
import classes from "./Header.module.css";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import gmailImg from "../../assets/gmail.webp";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["headerLeft"]}>
        {/* this helps to add hover effect */}
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img src={gmailImg} alt="gmail-image" />
      </div>
      <div className={classes.headerMiddle}>
        <SearchIcon />
        <input placeholder="search mail" type="text" />
        <ArrowDropDownIcon className={classes.headerInputCaret} />
      </div>
      <div className={classes.headerRight}>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
