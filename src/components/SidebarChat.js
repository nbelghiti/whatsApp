import React from "react";
import "../styles/SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Chat</h2>
        <p>this is the last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
