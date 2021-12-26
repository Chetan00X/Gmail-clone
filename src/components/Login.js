import React from "react";
import classes from "./Login.module.css";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import provider from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../store/user-slice";
import { Button } from "@material-ui/core";

function Login() {
  const dispatch = useDispatch();
  const signInHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className={classes.login}>
      <div className={classes["container"]}>
        <img
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt="gmail-logo"
        />
        <Button variant="contained" color="primary" onClick={signInHandler}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
