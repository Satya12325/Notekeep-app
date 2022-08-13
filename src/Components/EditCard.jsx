import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import PushPinIcon from "@mui/icons-material/PushPin";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentSucess({ open, handleClose,titles,notes,handleEdits,id}) {
  const { v4: uuidv4 } = require("uuid");
  const [title, setTitle] = useState(titles);
  const [note, setNote] = useState(notes);

  const handleEdit=()=>{
    handleClose()
    handleEdits(title,note,id)
  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
       key={id}
      >
        <div className="paper peper_width">
          <div className="pined"></div>
          <PushPinIcon className="pin" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "20px", color: "black" }}
          >
            Take a Note...
          </Typography>
          <TextField
          required
          placeholder="Title"         
          className="text"
          variant="filled"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />
          <br />

          <TextField
            id="filled-multiline-static"
            placeholder="Take a Note..."
            multiline
            className="text"
            variant="filled"
            value={note}
          onChange={(e)=>setNote(e.target.value)}
          />
          <Button onClick={handleEdit}>Edit</Button>
        </div>
      </Dialog>
    </div>
  );
}
