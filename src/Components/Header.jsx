import * as React from "react";
import { AppBar, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TaskIcon from "@mui/icons-material/Task";
import "./Header.css";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" className="IconLogo">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <TaskIcon sx={{ color: "yellow", fontSize: "35px" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontSize: "30px" }}
          >
            TASK
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export { Header };
