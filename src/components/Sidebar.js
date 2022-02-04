import React from "react";

export default function Sidebar() {
  return (
    <div>
      <div
        className="card-header  bg-white active "
        style={{ cursor: "pointer", border: "0" }}
      >
        <div
          className=""
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div className="d-flex justify-content-between">
            <img
              src="https://wallup.net/wp-content/uploads/2019/09/125245-mountain-forest-sky-landscape.jpg"
              width="50"
              height="50"
              className="rounded-circle"
              alt=""
              srcset=""
            />

            <div className="mx-2 mt-0" style={{ fontSize: "16px" }}>
              codegeeks <br />{" "}
              <div style={{ color: "grey", fontSize: "12px" }}>
                Active 4 hours ago
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
