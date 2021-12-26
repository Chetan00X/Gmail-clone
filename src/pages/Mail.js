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

function Mail() {
  let navigate = useNavigate();
  return (
    <div className={classes.mail}>
      <div className={classes["tools"]}>
        <div className={classes["toolsLeft"]}>
          <IconButton onClick={() => navigate("/")}>
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
      <div className={classes["body"]}>
        <div className={classes["bodyHeader"]}>
          <h2>Subject</h2>
          <LabelImportantIcon className={classes["important"]} />
          <p>title</p>
          <p className={classes["time"]}>10pm</p>
        </div>

        <div className={classes["message"]}>
          <p>
            this is a message Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Deserunt, corrupti. Aperiam recusandae rem ipsum,
            debitis aut eaque sint praesentium maxime quibusdam suscipit
            necessitatibus culpa explicabo neque vitae? Quo, eaque earum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
