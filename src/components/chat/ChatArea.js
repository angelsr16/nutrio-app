import { useState } from "react";
import "./ChatArea.css";
import Message from "./Message";
import { sendMessageNutritionist } from "../../actions/chatActions";
import { connect } from "react-redux";

const ChatArea = ({ currentUser, chat, sendMessageNutritionist, client }) => {
  const [message, setMessage] = useState({
    authorId: currentUser ? currentUser : "",
    message: "",
  });

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    if (message.message !== "" && client) {
      console.log("test");
      sendMessageNutritionist(message, client);
    }
  };

  return (
    <div className="chatArea">
      <div className="chatBody">
        {currentUser &&
          chat &&
          chat.messages &&
          chat.messages.map((message, i) => {
            console.log(message.authorId, currentUser);
            return (
              <Message
                key={i}
                emisor={currentUser === message.authorId}
                content={message.message}
              />
            );
          })}
          
      </div>
      <div className="chatFooter">
        <input name="message" type="text" onChange={handleChange} />
        <span className="material-icons" onClick={handleSendMessage}>
          send
        </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageNutritionist: (message, clientId) => dispatch(sendMessageNutritionist(message, clientId)),
  };
};

export default connect(null, mapDispatchToProps)(ChatArea);
