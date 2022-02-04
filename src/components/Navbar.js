import React from "react";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import ExploreIcon from "@mui/icons-material/Explore";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import CircleNotificationsRoundedIcon from "@mui/icons-material/CircleNotificationsRounded";
import { Link } from "react-router-dom";
import Add_Post from "./Add_Post";
export default function Navbar() {
  return (
    <>
      <div class="modal" tabindex="-1" id="add_post">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <Add_Post />
          </div>
        </div>
      </div>
      <div className="sticky-top">
        <nav className=" navbar navbar-expand-lg navbar-light bg-white shadow-sm">
          <Link className="navbar-brand " to="/">
            <img
              src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?fit=600%2C600"
              height="50"
              width="50"
              alt=""
              srcset=""
            />
          </Link>

          <div className="d-flex justify-content-center">
            <input
              type="search"
              className="mx-2 text-center"
              name=""
              id="search"
              placeholder="Search"
              style={{
                opacity: "0.5",
                borderRadius: "5px",
                backgroundColor: "whitesmoke",
              }}
            />
          </div>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

          <div className="nav-link ml-auto d-flex justify-content-between">
            <div className="nav-item ">
              <Link className="nav-link" style={{ color: "black" }} to="/">
                <HomeIcon />{" "}
              </Link>
            </div>
            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/message"
              >
                <MessageRoundedIcon />
              </Link>
            </div>

            <div className="nav-item">
              <Link className="nav-link" style={{ color: "black" }} to="">
                <AddCircleIcon data-toggle="modal" data-target="#add_post" />
              </Link>
            </div>

            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/trending"
              >
                <ExploreIcon />
              </Link>
            </div>
            <div className="nav-item">
              <Link
                className="nav-link"
                style={{ color: "black" }}
                to="/profile"
              >
                <AccountCircleOutlinedIcon />
              </Link>
            </div>
            <div className="nav-item ">
              <Link className="nav-link" style={{ color: "black" }} to="#">
                <CircleNotificationsRoundedIcon />{" "}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
