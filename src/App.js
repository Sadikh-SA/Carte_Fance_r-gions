import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import France from "@svg-maps/france.regions";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import LocationCityIcon from "@mui/icons-material/LocationCity";

function App() {
  const [stateCode, setStateCode] = useState("");
  const [stateName, setStateName] = useState("");

  function onLocationClick(event) {
    setStateCode(event.target.id);
    setStateName(event.target.getAttribute("name"));
    console.log("Id", event.target.id);
    console.log("Name", event.target.getAttribute("name"));
    setAnchorEl(event.currentTarget);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Row className=" justify-content-center">
      
      <Row>
        <h2>CARTE DE FRANCE REGIONALES</h2>
      </Row>
      <SVGMap map={France} onLocationClick={onLocationClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LocationCityIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={stateName} secondary={stateCode} />
            </ListItem>
          </List>
        </Typography>
      </Popover>
    </Row>
  );
}
export default App;
