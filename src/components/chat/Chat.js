import { useState } from "react";
import { connect } from "react-redux";
import "./Chat.css";
import ChatArea from "./ChatArea";
import UserItem from "./UserItem";

const Chat = ({ users, chat, uid }) => {
  const [currentClient, setCurrentClient] = useState();

  const handleItemClick = (clientId) => {
    if (users) {
      setCurrentClient(users[clientId]);
    }
  };

  return (
    <div className="chat">
      <div className="sideBar">
        <h2>Clientes</h2>
        <div className="userItems">
          {/* {userItems.map((user) => {
            return <UserItem key={user.id} OnClick={()=> handleItemClick(user.id)} />
          })} */}
          {users &&
            Object.keys(users).map((key, i) => {
              const currentUser = users[key];
              if (currentUser.rol === "Cliente") {
                return (
                  <UserItem
                    key={i}
                    client={currentUser}
                    OnClick={() => handleItemClick(currentUser.uid)}
                  />
                );
              }
            })}
        </div>
      </div>
      {/* {renderChatArea()} */}
      {currentClient && chat && (
        <ChatArea
          chat={chat[currentClient.uid]}
          currentUser={uid}
          client={currentClient.uid}
        />
      )}
      {/* {currentClient && chat && (
        console.log("tsetlaknf"),
      )*/}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.firestore.data.chat,
    users: state.firestore.data.users,
    currentUser:
      state.firestore.data.users &&
      state.firestore.data.users[state.firebase.auth.uid],
  };
};

export default connect(mapStateToProps)(Chat);
