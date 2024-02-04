import React, { useEffect } from "react";
import "./Preview.css";
import { useDispatch, useSelector } from "react-redux";
import { resetCameraImage, selectCameraImage } from "./features/cameraSlice";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import CreateIcon from "@mui/icons-material/Create";
import EditNoteIcon from "@mui/icons-material/EditNote";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import CropIcon from "@mui/icons-material/Crop";
import TimerIcon from "@mui/icons-material/Timer";
import SendIcon from "@mui/icons-material/Send";
function Preview() {
  const cameraImage = useSelector(selectCameraImage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cameraImage) {
      navigate("/");
    }
  }, [navigate, cameraImage]);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview_close" />
      <div className="preview_toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <EditNoteIcon />
        <MusicNoteIcon /> <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>
      <img src={cameraImage} alt="Camera Preview" />
      <div className="preview_footer">
        <h2>Send Now</h2>
        <SendIcon fontSize="small" className="preview_sendicon" />
      </div>
    </div>
  );
}

export default Preview;
