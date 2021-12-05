import "./Message.css";

const Message = ({ emisor, content }) => {
  return (
    <>
      {/* <div className="message-emitter">
        <p>{content}</p>
      </div>
      <p className="message-emitter">{content}</p> */}

      {emisor ? (
        <div className="message-transmitter message-container"><p className="message-content">{content}</p></div>
      ) : (
        <div className="message-receptor message-container"><p className="message-content">{content}</p></div>
      )}
    </>
  );
};

export default Message;
