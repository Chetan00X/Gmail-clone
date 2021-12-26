import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mail from "./pages/Mail";
import EmailList from "./pages/EmailList";
import SendEmail from "./email/SendEmail";
import { useSelector } from "react-redux";
import Login from "./components/Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/user-slice";

function App() {
  const sendMessageIsOpen = useSelector((state) => state.mail.sendMailOpen);
  const user = useSelector((state) => state.user.user);
  const auth = getAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user is logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [auth, dispatch]);
  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="appBody">
            <Sidebar />
            <Routes>
              <Route path="/mail" element={<Mail />} />
              <Route path="/" element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendEmail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
