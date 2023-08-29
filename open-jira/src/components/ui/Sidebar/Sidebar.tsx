import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useContext } from "react";
import { UIContext } from "@/context/ui";

const menuItems: string[] = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
  const { sideMenuOpen, closeSidebar } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>
              {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};
