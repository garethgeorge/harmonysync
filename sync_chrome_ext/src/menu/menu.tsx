import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Checkbox,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import fancyStyle from "./gradientStyle";
import syncServers from "../sync_servers";
import sleep from "../common/lib/sleep";
import {SyncStatus, getSyncStatus, modeStringsPastTense} from "../common/sync_status";

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

  let [syncStatus, setSyncStatus] = useState({
    injected: true,
    mode: null,
  } as SyncStatus);
  
  useEffect(() => {
    console.log("requesting the sync status");
    getSyncStatus()
      .then((status) => {
        if (!status) {
          setSyncStatus({
            injected: false,
            mode: null,
          });
          return;
        }
        setSyncStatus(status as SyncStatus);
      })
      .catch((e) => {
        console.error("caught error: ", e);
        alert("tab is not eligable for sync, " + e);
      });
  }, []);
  let injected = syncStatus && syncStatus.injected;

  // dialogue state
  let content = null;
  if (!injected) {
    content = (
      <div>
        <p>Create or join a sync lobby to watch videos with your friends!</p>
        <Button
          variant="contained"
          color="primary"
          className={gradient1.root}
          style={{ width: "100%", marginBottom: ".5em" }}
          disabled={!!syncStatus.mode}
          onClick={async () => {
            setSyncStatus({
              injected: false,
              mode: "injecting",
            });

            chrome.tabs.executeScript({
              file: "./build/bundle/content_script_bundle.js",
            });
            await sleep(50);
            chrome.tabs.executeScript({
              code: "window.createLobby()",
            });
            await sleep(50);
            getSyncStatus()
              .then(setSyncStatus)
              .catch(() => {
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
          disabled={!!syncStatus.mode}
          onClick={() => {
            setSyncStatus({
              injected: false,
              mode: "injecting",
            });

            chrome.tabs.executeScript({
              file: "./build/bundle/content_script_bundle.js",
            });
            chrome.tabs.executeScript({
              code: "window.joinLobby()",
            });
            getSyncStatus()
              .then(setSyncStatus)
              .catch(() => {
                alert("tab is not eligable for sync");
              });
          }}
        >
          JOIN LOBBY
        </Button>
      </div>
    );
  } else {
    content = <h2>Already {modeStringsPastTense[syncStatus.mode]}!</h2>;
  }

  return (
    <Box bgcolor="background.paper" style={{ width: "350px" }}>
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

window.onload = () => {
  ReactDOM.render(<MainMenu />, document.getElementById("react-root"));
};
