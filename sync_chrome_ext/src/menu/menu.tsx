import ReactDOM from "react-dom";
import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Slide,
} from "@material-ui/core";
import fancyStyle from "./gradientStyle";

console.log("Loaded menu.tsx");

const MainMenu = () => {
  // calculate gradients
  const gradient1 = fancyStyle();
  const gradient2 = fancyStyle("#009bff", "#769bff");

  // state
  const [lobbyInfo, setLobbyInfo] = useState(null);

  // dialogue state
  const [dialogueIsOpen, setDialogueIsOpen] = useState(false);
  const handleCloseDialogue = () => {
    setDialogueIsOpen(!dialogueIsOpen);
  };

  let content = null;
  if (!lobbyInfo) {
    content = (
      <div>
        <p>Create or join a sync lobby to watch videos with your friends!</p>
        <Button
          variant="contained"
          color="primary"
          className={gradient1.root}
          style={{ width: "100%", marginBottom: ".5em" }}
          onClick={() => {
            setDialogueIsOpen(!dialogueIsOpen);
          }}
        >
          CREATE LOBBY
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={gradient2.root}
          style={{ width: "100%" }}
          onClick={() => {
            setDialogueIsOpen(!dialogueIsOpen);
          }}
        >
          JOIN LOBBY
        </Button>
        <Dialog
          fullScreen
          open={dialogueIsOpen}
          onClose={handleCloseDialogue}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"CREATE LOBBY"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialogue} color="primary">
              Never mind
            </Button>
            <Button
              onClick={() => {
                handleCloseDialogue();
                setLobbyInfo(true);
              }}
              color="primary"
              autoFocus
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    // lobby info is available 
    content = <p>Connected to / created lobby</p>
  }

  return (
    <Box
      bgcolor="background.paper"
      style={{ width: "350px", height: dialogueIsOpen ? "500px" : undefined }}
    >
      <h1>HarmonySync</h1>
      {content}
    </Box>
  );
};

window.onload = () => {
  ReactDOM.render(<MainMenu />, document.getElementById("react-root"));
};
