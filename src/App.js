import "./App.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/SideBar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mail from "./pages/Mail";
import EmailList from "./pages/EmailList";
import SendEmail from "./email/SendEmail";
import { useSelector } from "react-redux";

function App() {
  const sendMessageIsOpen = useSelector((state) => state.mail.sendMailOpen);
  console.log(sendMessageIsOpen);
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
