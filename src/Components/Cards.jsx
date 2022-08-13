import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import PushPinIcon from "@mui/icons-material/PushPin";
import PaymentSucess from "./EditCard";
import DeleteIcon from "@mui/icons-material/Delete";

const Cards = ({ title, notes, handleEdits, id, handlePinned, pinned,handleDelete }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  var Style = {};
  if (pinned === true) {
    Style = {
      color: "green",
    };
  }
  return (
    <div>
      <Paper elevation={3} className="Cardspaper">
        <div className="pined"></div>
        <PushPinIcon
          className="pin"
          onClick={() => handlePinned(id)}
          style={Style}
        />
        <div onClick={handleOpen}>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "blue" }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, color: "white" }}
          >
            {notes}
          </Typography>
        </div>
          <DeleteIcon sx={{ cursor: "pointer", color: "red" }} 
          onClick ={()=>handleDelete(id)}
          />
      </Paper>
      <PaymentSucess
        open={open}
        handleClose={handleClose}
        titles={title}
        notes={notes}
        handleEdits={handleEdits}
        id={id}
      />
    </div>
  );
};

export { Cards };
