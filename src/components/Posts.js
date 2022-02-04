import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TelegramIcon from "@mui/icons-material/Telegram";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
export default function Posts() {
  return (
    <div>
      <div className="container">
        <div className="col-md-6 offset-md-3 my-4">
          <div
            className="card-header border bg-white"
            style={{ overflowX: "auto" }}
          >
            <div className="d-flex justify-content-between">
              <div className="my-1 mx-2">
                <img
                  className="rounded-circle p-1 border"
                  style={{ cursor: "pointer" }}
                  src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
                  width="60"
                  height="60"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="my-1 mx-2">
                <img
                  className="rounded-circle p-1 border"
                  style={{ cursor: "pointer" }}
                  src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
                  width="60"
                  height="60"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="my-1 mx-2">
                <img
                  className="rounded-circle p-1 border"
                  style={{ cursor: "pointer" }}
                  src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
                  width="60"
                  height="60"
                  alt=""
                  srcset=""
                />
              </div>
              <div className="my-1 mx-2">
                <img
                  className="rounded-circle p-1 border"
                  style={{ cursor: "pointer" }}
                  src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
                  width="60"
                  height="60"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-4">
        <div className="col-md-6 offset-md-3">
          <div className="card my-4">
            <div className="card-herader  bg-white">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <img
                    src="http://www.radiogramadonews.com.br/wp-content/uploads/2020/06/logo-instagram-png-sem-fundo16.png"
                    height="40"
                    weight="40"
                    className="rounded-circle border m-2"
                    alt=""
                    srcset=""
                  />
                  <div
                    className="my-3"
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      fontFamily: "cursive",
                    }}
                  >
                    codegeeks
                  </div>
                </div>
                <div className="my-3 mx-2">
                  <MoreHorizIcon />
                </div>
              </div>
            </div>

            <img
              src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
              width="100%"
              height="450px"
              alt=""
              srcset=""
            />
            <div className="d-flex justify-content-between mt-3 mb-2">
              <div className="d-flex justiify-content-between ">
                <div
                  className="mx-2"
                  style={{ fontSize: "15px", cursor: "pointer" }}
                >
                  <FavoriteBorderIcon />
                </div>
                <div
                  className="mx-2"
                  style={{ fontSize: "15px", cursor: "pointer" }}
                >
                  <CommentIcon />
                </div>
                <div
                  className="mx-2"
                  style={{ fontSize: "15px", cursor: "pointer" }}
                >
                  <TelegramIcon />
                </div>
              </div>
              <div
                className="mx-2"
                style={{ fontSize: "15px", cursor: "pointer" }}
              >
                <TurnedInNotIcon />
              </div>
            </div>

            <h6
              className="mx-2"
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                fontFamily: "math".fontWeight,
              }}
            >
              261 likes
            </h6>
            <p style={{ fontSize: "13px" }} className="mx-2">
              <span
                className="mr-1"
                style={{ fontSize: "13px", fontFamily: "cursive" }}
              >
                <a style={{ color: "black" }} href="#">
                  codegeeks
                </a>
              </span>
              codegeeks is best platform to learn coding virtually.... <br />
              <p
                className="mb-3"
                style={{ fontSize: "13px", color: "grey", cursor: "pointer" }}
              >
                View all 5 comments{" "}
                <span style={{ fontSize: "10px" }}>
                  <br />3 HOURS AGO
                </span>
              </p>
            </p>

            <div className="border bg-white">
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <div className="mx-1 my-1">
                    <EmojiEmotionsOutlinedIcon />
                  </div>
                  <div className="mx-1">
                    <input
                      type="text"
                      style={{ border: "0px" }}
                      placeholder="Add a comment..."
                      name=""
                      id="comments"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="mx-1">
                  <button
                    className="btn btn-default"
                    style={{ border: "0", color: "blue", opacity: "0.5" }}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
