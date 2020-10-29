import React from "react";
import "../styles/Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicNoneIcon from "@material-ui/icons/MicNone";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>last deen at ...</p>
        </div>
        <div className="headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Me</span>
          Hi
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Najoie</span>
          Hey how are you ?
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message">
          <span className="chat__name">Me</span>
          good, thanks and you
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat__message chat__reciever">
          <span className="chat__name">Najoie</span>
          good
          <span className="chat__timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>
      <div className="chat__footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form action="">
          <input type="text" placeholder="type a message" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
