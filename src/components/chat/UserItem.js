import "./UserItem.css";

const UserItem = ({ OnClick, client, isSelected }) => {
  return (
    <div className={`userItem ${isSelected ? "isSelected" : ""}`} onClick={OnClick}>
      <p>{client.name}</p>
    </div>
  );
};

export default UserItem;
