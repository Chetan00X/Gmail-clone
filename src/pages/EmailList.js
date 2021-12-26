import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RedoIcon from "@mui/icons-material/Redo";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import InboxIcon from "@mui/icons-material/Inbox";
import React from "react";
import classes from "./EmailList.module.css";
import Section from "../email/Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from "../email/EmailRow";
import { useState, useEffect } from "react";
import { onSnapshot, collection, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function EmailList() {
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "email");
    const q = query(collectionRef, orderBy("timestamp", "desc"));

    const unsub = onSnapshot(q, (snapshot) =>
      setEmail(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );

    return unsub;
  }, []);
  console.log(email[0]);

  return (
    <div className={classes.emailList}>
      <div className={classes.emailSettings}>
        <div className={classes.settingsLeft}>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>

        <div className={classes.settingsRight}>
          <Checkbox />
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className={classes.emailSections}>
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section
          Icon={PeopleIcon}
          title="Social"
          color="#1A73E8"
          selected={false}
        />
        <Section
          Icon={LocalOfferIcon}
          title="Promotions"
          color="green"
          selected={false}
        />
      </div>
      <div className={classes.list}>
        {email.map(({ message, subject, timestamp, to, id }) => (
          <EmailRow
            key={id}
            title={to}
            subject={subject}
            message={message}
            time={timestamp}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
