import Client from "./Client";
import { connect } from "react-redux";
import "./ClientList.css";

const ClientList = ({ users }) => {
  return (
    <div className="clientslist">
      <div className="clients-header">
        <p className="clients-header-nombre">Nombre</p>
        <p className="clients-header-contacto">Contacto</p>
        <p className="clients-header-estatus">Estatus</p>
      </div>
      <div className="clients-body">
        {users &&
          Object.keys(users).map(
            (key) =>
              users[key].rol === "Cliente" && (
                <Client
                  key={users[key].uid}
                  id={users[key].uid}
                  nombre={users[key].name}
                  contacto={users[key].phoneNumber}
                  estatus={users[key].status}
                />
              )
          )}
        {/* {users &&
          users.map((user) => {
            user.rol === "Cliente" && (
              <Client
                nombre={user.name}
                contacto={user.phoneNumber}
                estatus={user.status}
              />
            );
          })} */}
        {/* <Client nombre="Angel" contacto="2282362059" estatus="Pendiente" />
        <Client nombre="Jesus" contacto="2871809823" estatus="Pagado" /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.data.users,
  };
};

export default connect(mapStateToProps)(ClientList);
