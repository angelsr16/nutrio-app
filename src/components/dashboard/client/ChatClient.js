import { useState } from "react";
import { connect } from "react-redux";
import { sendMessage } from "../../../actions/chatActions";
import Message from "../../chat/Message";
import "./ChatClient.css";

const ChatClient = ({ currentUser, sendMessage, chat }) => {
  const [isVisible, setVisible] = useState(false);

  const [message, setMessage] = useState({
    authorId: currentUser ? currentUser.uid : "",
    message: "",
  });

  const toggleChat = () => {
    setVisible(!isVisible);
  };

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    if (message.message !== "") {
      sendMessage(message);
    }
  };

  return (
    <>
      {isVisible ? (
        <div className="chatClient">
          <div className="chatHeader">
            <h3>Chat</h3>
            <span onClick={toggleChat}>X</span>
          </div>
          <div className="chatBody">
            {currentUser &&
              chat &&
              chat.messages &&
              chat.messages.map((message, i) => {
                return (
                  <Message
                    key={i}
                    emisor={currentUser.uid === message.authorId}
                    content={message.message}
                  />
                );
              })}
            {/* {currentUser &&
              chat &&
              Object.keys(chat).map((key, i) => {
                if (chat[key]) {
                  return (
                    <Message
                      key={i}
                      emisor={currentUser.uid === chat[key].authorId}
                      content={chat[key].message}
                    />
                  );
                } else {
                  return null;
                }
              })} */}
          </div>
          <div className="chatFooter">
            <input
              name="message"
              type="text"
              value={message.message}
              onChange={handleChange}
            />
            <span className="material-icons" onClick={handleSendMessage}>
              send
            </span>
          </div>
        </div>
      ) : (
        <div className="chatButton" onClick={toggleChat}>
          <span className="material-icons">message</span>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    // chat: props.currentUser
    //   ? state.firestore.data.chat[props.currentUser.uid]
    //   : state.firestore.data.chat,
    chat:
      state.firestore.data.chat &&
      props.currentUser &&
      state.firestore.data.chat[props.currentUser.uid],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatClient);
