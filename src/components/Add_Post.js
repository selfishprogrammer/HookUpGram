import React from "react";
import ImageIcon from "@mui/icons-material/Image";
export default function Add_Post() {
  return (
    <div>
      <div class="card-header text-center bg-white">
        <h5 class="modal-title d-flex justify-content-center">
          <span style={{ fontFamily: "cursive", fontSize: "18px" }}>
            Create Post
          </span>{" "}
        </h5>
      </div>
      <div class="modal-body">
        <div className="d-flex justify-content-center">
          <div className="my-4">
            <div className="mt-5 mb-1 text-center">
              <ImageIcon style={{ fontSize: "55px" }} />
            </div>
            <div className="mt-2 text-center" style={{ fontSize: "20px" }}>
              Drag & Drop Your Posts
            </div>

            <div class="input-group mt-4 mb-5">
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile04"
                  aria-describedby="inputGroupFileAddon04"
                />
                <label class="custom-file-label" for="inputGroupFile04">
                  Choose file
                </label>
              </div>
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="inputGroupFileAddon04"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
