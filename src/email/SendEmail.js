import React from "react";
import classes from "./SendEmail.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMail } from "../store/mail-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

function SendEmail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const sendMessageIsOpen = useSelector((state) => state.mail.sendMailOpen);
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    console.log(formData);
    try {
      const docRef = await addDoc(collection(db, "email"), {
        to: formData.to,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const formSubmitHandler = () => {
    if (sendMessageIsOpen) {
      dispatch(closeSendMail());
    }
  };

  return (
    <div className={classes["sendMail"]}>
      <div className={classes["header"]}>
        <h3>New Email</h3>
        <CloseIcon
          className={classes["closeEmail"]}
          onClick={formSubmitHandler}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="To"
          type="text"
          name="to"
          {...register("to", { required: true })}
        />
        {errors.to && (
          <p className={classes["sendMail__error"]}>To is required </p>
        )}
        <input
          placeholder="Subject"
          type="text"
          name="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className={classes["sendMail__error"]}>Subject is required </p>
        )}
        <input
          placeholder="Message"
          type="text"
          className={classes.sendMessage}
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className={classes["sendMail__error"]}>Message is required</p>
        )}

        <div className={classes["sendMail__options"]}>
          <Button
            className={classes.send}
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendEmail;
