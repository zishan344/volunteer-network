import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Login from "./component/Account/Login/Login";
import Register from "./component/Account/Register/Register";
import Blog from "./component/Blog/Blog";
import Donation from "./component/Donation/Donation";
import Events from "./component/Events/Events";
import Home from "./component/Home/Home";
import Header from "./component/Sheard/Header/Header";
import NotFound from "./component/Sheard/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/donation" element={<Donation></Donation>}></Route>
        <Route path="/events" element={<Events></Events>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
