import React from "react";
import classes from "./Sidebar.module.css";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import NearMeIcon from "@mui/icons-material/NearMe";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NoteIcon from "@mui/icons-material/Note";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@material-ui/core";
import DuoIcon from "@mui/icons-material/Duo";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch } from "react-redux";
import { openSendMail } from "../store/mail-slice";

const SideBar = () => {
  const dispatch = useDispatch();

  const openSendMailHandler = () => {
    dispatch(openSendMail());
  };

  return (
    <div className={classes.sideBar}>
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className={classes.compose}
        onClick={openSendMailHandler}
      >
        COMPOSE
      </Button>
      <SidebarOption
        title="Inbox"
        Icon={InboxIcon}
        number={54}
        selected={true}
      />
      <SidebarOption title="Starred" Icon={StarIcon} number={54} />
      <SidebarOption title="Snoozed" Icon={AccessTimeIcon} number={54} />
      <SidebarOption title="Important" Icon={LabelImportantIcon} number={54} />
      <SidebarOption title="Important" Icon={NearMeIcon} number={54} />
      <SidebarOption title="Draft" Icon={NoteIcon} number={54} />
      <SidebarOption title="More" Icon={ExpandMoreIcon} number={54} />

      <div className={classes.sidebarFooter}>
        <div className={classes.footerIcons}>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
