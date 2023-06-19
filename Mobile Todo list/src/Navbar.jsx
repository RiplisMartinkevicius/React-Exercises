import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ChecklistIcon from "@mui/icons-material/Checklist";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ChecklistIcon sx={{ m: 3 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
