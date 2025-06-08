import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Navbar = ({ mode, setMode }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>Admin Dashboard</Typography>
      <IconButton color="inherit" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        <Brightness4Icon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
