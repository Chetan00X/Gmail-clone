import { IconButton } from "@material-ui/core";
import React from "react";
import classes from "./EmailRow.module.css";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
  let navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/mail`)} className={classes.row}>
      <div className={classes.rowOption}>
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
      </div>
      <h3 className={classes.rowtitle}>{title}</h3>
      <div className={classes.rowMessage}>
        <h4>
          {subject}
          <span className={classes.rowDescription}>{description}</span>
        </h4>
      </div>
      <p className={classes.rowTime}>{time}</p>
    </div>
  );
}

export default EmailRow;
