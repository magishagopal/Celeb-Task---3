import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Drawer variant="permanent" anchor="left">
    <List>
      <ListItem button component={Link} to="/">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/table">
        <ListItemText primary="Table" />
      </ListItem>
      <ListItem button component={Link} to="/calendar">
        <ListItemText primary="Calendar" />
      </ListItem>
      <ListItem button component={Link} to="/kanban">
        <ListItemText primary="Kanban" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
