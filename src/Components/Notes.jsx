import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';





const Notes = ({ Alldata }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [display, setDisplay] = useState("none");
  const [data, setData] = useState({});
  const [notedisplay, setNotedisplay] = useState("block");
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal } = state;



  

  const handleDisplay = () => {
    setDisplay("block");
    setNotedisplay("none");
  };
  const handleAdd = () => {
    
    if (note === "") {
      setDisplay("none");
      setNotedisplay("block");
      handleClick();
      setTitle("")
      return false;
    }
    setDisplay("none");
    setNotedisplay("block");
    Alldata(title, note);
    setTitle("")
    setNote("")
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const action = (
    <div>
      
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </div>
  );


  return (
    <div>
      <Snackbar
     anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Please add some notes"
        action={action}
        
      />
      <Paper elevation={3} className="paper">
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontSize: "20px",
            color: "white",
            display: notedisplay,
          }}
          onClick={handleDisplay}
        >
          Take a Note...
        </Typography>
        <Box className="inputBox" style={{ display: display }}>
          {/* <input type="text" placeholder="Title" className="text" /> */}
          <TextField
            required
            placeholder="Title"
            className="text"
            variant="filled"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />

          <TextField
            id="filled-multiline-static"
            placeholder="Take a Note..."
            multiline
            className="text"
            variant="filled"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <div className="addIcon" onClick={handleAdd}>
            <AddIcon />
          </div>
        </Box>
      </Paper>

      
    </div>
  );
};

export { Notes };
