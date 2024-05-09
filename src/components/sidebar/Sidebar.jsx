import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Link } from "react-router-dom";
import {  useState } from "react";
import Modal from "../Modal/Modal";
import ArticleIcon from "@mui/icons-material/Article";


const Sidebar = () => {

  const [openModal, setOpenModal] = useState(false);

  const logout = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    setOpenModal(false);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Bloggit</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/blogs" style={{ textDecoration: "none" }}>

            <li>
              <ArticleIcon className="icon" />
              <span>Blogs</span>
            </li>
          </Link>

          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <div className="logout">

            <li onClick={logout} >


              <ExitToAppIcon className="icon" style={{ color: "red" }} />
              <span style={{ color: "red" }} >Logout</span>

            </li>
          </div>

        </ul>
      </div>
      <Modal open={openModal} handleClose={handleCloseModal} handleLogout={handleLogout} />


    </div>
  );
};

export default Sidebar;
