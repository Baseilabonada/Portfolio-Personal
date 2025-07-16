import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";
import './componentstyle.css'
export default function AlignItemsList() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <a 
      className="a"
        href="https://www.facebook.com/share/1BwFahj8ii/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <FacebookIcon />
          </ListItemAvatar>
          <ListItemText primary="Baseil Abo Nada " />
        </ListItem>
      </a>
      <Divider />
      <a
            className="a"

        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/baseil_abo_nada?igsh=bmRpYmI3OGt2ZW5o&utm_source=qr"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <InstagramIcon />
          </ListItemAvatar>
          <ListItemText primary="baseil_abo_nada " />
        </ListItem>
      </a>
      <Divider />
      <a
            className="a"

        href="https://wa.me/972592502182"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <WhatsAppIcon />
          </ListItemAvatar>
          <ListItemText primary="+972 59-250-2182 " />
        </ListItem>
      </a>
      <Divider />
      <a
            className="a"

        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/basel-abo-nada-952b6a372?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <LinkedInIcon />
          </ListItemAvatar>
          <ListItemText primary="Baseil Abo Nada " />
        </ListItem>
      </a>

      <Divider />

      <a
            className="a"

       href="059-2905475">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <CallIcon />
          </ListItemAvatar>
          <ListItemText primary="059-2905475" />
        </ListItem>
      </a>
    </List>
  );
}
