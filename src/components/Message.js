import React from "react";
import ChatsSection from "./ChatsSection";
import Sidebar from "./Sidebar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";

export default function Message() {
  return (
    <div>
      <div className="col-md-6 offset-md-3 my-4">
        <div
          className="shadow-sm bg-white border "
          style={{ height: "74vh", width: "100%" }}
        >
          <div className="d-flex">
            <div
              className="side_bar"
              style={{
                flex: "0.4",
                borderRight: "1px solid grey",
              }}
            >
              <h6
                className="card-header bg-white text-center py-3"
                style={{ cursor: "pointer", fontSize: "19px" }}
              >
                codegeeks &nbsp;
                <KeyboardArrowDownIcon />
              </h6>
            </div>
            <div
              className="chatt_bar"
              style={{
                flex: "0.6",
              }}
            >
              <div className="card-header bg-white">
                <div className="d-flex justify-content-between">
                  <div className="d-flex justify-content-between">
                    <img
                      src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
                      width="29"
                      height="29"
                      className="rounded-circle mt-1"
                      alt=""
                      srcset=""
                    />
                    <h6 className="mx-2 mt-2" style={{ fontSize: "15px" }}>
                      codegeeks <br />
                    </h6>
                  </div>
                  <div className="mx-0 mt-1">
                    <InfoTwoToneIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <div
              className="side_bar"
              style={{
                flex: "0.4",
                borderRight: "1px solid grey",
                height: "65vh",
                overflowY: "auto",
              }}
            >
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
              <Sidebar />
            </div>
            <div
              className="chatt_bar"
              style={{
                height: "65vh",
                overflowY: "auto",
                flex: "0.6",
              }}
            >
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
              <ChatsSection />
            </div>
          </div>
        </div>

        <div className="card-header bg-white" style={{ border: "0" }}>
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
                  id="msg"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mx-1">
              <button
                className="btn btn-default"
                style={{ border: "0", color: "blue", opacity: "0.5" }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
