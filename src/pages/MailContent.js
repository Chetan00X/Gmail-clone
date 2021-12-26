import React from "react";
import classes from "./MailContent.module.css";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { useSelector } from "react-redux";

function MailContent() {
  const correspondingMail = useSelector(
    (state) => state.mail.correspondingMail
  );
  const { time, subject, description, title } = correspondingMail;

  return (
    <div className={classes["body"]}>
      <div className={classes["bodyHeader"]}>
        <h2>{subject}</h2>
        <LabelImportantIcon className={classes["important"]} />
        <p>{title}</p>
        <p className={classes["time"]}>{time}</p>
      </div>
      <div className={classes["message"]}>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MailContent;
