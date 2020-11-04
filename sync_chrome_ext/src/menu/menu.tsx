import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
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
import {getSyncStatus} from "./state";

console.log("Loaded menu.tsx");

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
    Object.values(syncServers)[
      Math.floor(Object.keys(syncServers).length * Math.random())
    ]
  );

  let [syncStatus, setSyncStatus] = useState(null);
  useEffect(() => {
    console.log("requesting the sync status");
    getSyncStatus().then((status) => {
      setSyncStatus(status);
    }).catch(() => {
      alert("tab is not eligable for sync");
    });
  }, []);
  let injected = syncStatus && syncStatus.injected;

  // dialogue state
  const [dialogueIsOpen, setDialogueIsOpen] = useState(false);
  let content = null;
  if (!syncStatus) {
    content = (
      <div>
        <p>Create or join a sync lobby to watch videos with your friends!</p>
        <Button
          variant="contained"
          color="primary"
          className={gradient1.root}
          style={{ width: "100%", marginBottom: ".5em" }}
          onClick={() => {
            chrome.tabs.executeScript({
              file: "./build/bundle/content_script_bundle.js"
            });
            chrome.tabs.executeScript({
              code: "window.createLobby()"
            });
            getSyncStatus().then(setSyncStatus).catch(() => {
              alert("tab is not eligable for sync");
            });
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
            chrome.tabs.executeScript({
              file: "./build/bundle/content_script_bundle.js"
            });
            chrome.tabs.executeScript({
              code: "window.joinLobby()"
            });
            getSyncStatus().then(setSyncStatus).catch(() => {
              alert("tab is not eligable for sync");
            });
          }}
        >
          JOIN LOBBY
        </Button>
      </div>
    );
  } else {
    // lobby info is available
    content = <p>Already {injected} lobby!</p>;
  } 

  return (
    <Box
      bgcolor="background.paper"
      style={{ width: "350px", height: dialogueIsOpen ? "500px" : undefined }}
    >
      <h1>HarmonySync</h1>
      {content}

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
                      disabled={!!injected}
                    />
                  }
                  label={key}
                />
              );
            })}
          </FormGroup>
          {/* <FormHelperText>NOTE: this is required</FormHelperText> */}
        </FormControl>
    </Box>
  );
};

/*
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
*/

window.onload = () => {
  ReactDOM.render(<MainMenu />, document.getElementById("react-root"));
};
