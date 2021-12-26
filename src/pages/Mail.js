import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import React from "react";
import classes from "./Mail.module.css";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PrintIcon from "@mui/icons-material/Print";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MailContent from "./MailContent";
import { removeShowMail } from "../store/mail-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Mail() {
  let navigate = useNavigate();

  const correspondingMail = useSelector((state) => {
    return state.mail.correspondingMail;
  });
  const dispatch = useDispatch();
  console.log(correspondingMail);

  const gobacktoHomepageHandler = () => {
    navigate("/");
    dispatch(removeShowMail());
  };

  return (
    <div className={classes.mail}>
      <div className={classes["tools"]}>
        <div className={classes["toolsLeft"]}>
          <IconButton onClick={gobacktoHomepageHandler}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLaterIcon />
          </IconButton>
          <IconButton>
            <CheckCircleIcon />
          </IconButton>
          <IconButton>
            <LabelImportantIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className={classes["toolsRight"]}>
          <IconButton>
            <UnfoldMoreIcon />
          </IconButton>
          <IconButton>
            <PrintIcon />
          </IconButton>
          <IconButton>
            <ExitToAppIcon />
          </IconButton>
        </div>
      </div>
      <MailContent />
    </div>
  );
}

export default Mail;
