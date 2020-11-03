import ReactDOM from "react-dom";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
  Slide,
} from "@material-ui/core";
import fancyStyle from "./gradientStyle";
import syncServers from "../syncServers";

console.log("Loaded menu.tsx");

const JoinLobbyDialogue = ({ visible, onClose, onJoinClicked }) => {
  return (
    <Dialog
      open={visible}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"CREATE LOBBY"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Enter the ID of the lobby you would like to join
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Never mind
        </Button>
        <Button
          onClick={() => {
            onClose();
          }}
          color="primary"
          autoFocus
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const MainMenu = () => {
  // calculate gradients
  const gradient1 = fancyStyle();
  const gradient2 = fancyStyle("#009bff", "#769bff");

  // form styles
  const formStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }))();

  // state
  const [defaultSyncServer, setDefaultSyncServer] = useState(
    Object.values(syncServers)[Math.floor(Object.keys(syncServers).length * Math.random())]
  );
  const [lobbyInfo, setLobbyInfo] = useState(null);

  // dialogue state
  const [dialogueIsOpen, setDialogueIsOpen] = useState(false);
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
        <JoinLobbyDialogue
          visible={dialogueIsOpen}
          onClose={() => {
            setDialogueIsOpen(!dialogueIsOpen);
          }}
          onJoinClicked={() => {
            console.log("Join lobby was clicked");
          }}
        />

        <FormControl
          required
          component="fieldset"
          className={formStyles.formControl}
        >
          <FormLabel component="legend">
            Pick default synchronization server
          </FormLabel>
          <FormGroup>
            {Object.entries(syncServers).map(([key, value], idx) => {
              return (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value === defaultSyncServer}
                      onChange={() => {
                        // TODO: persist this to local storage or something :P
                        setDefaultSyncServer(value);
                      }}
                      name={value}
                    />
                  }
                  label={key}
                />
              );
            })}
          </FormGroup>
          <FormHelperText>NOTE: this is required</FormHelperText>
        </FormControl>
      </div>
    );
  } else {
    // lobby info is available
    content = <p>Connected to / created lobby</p>;
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
