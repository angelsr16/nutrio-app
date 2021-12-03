import React from "react";
import ReactDOM from "react-dom";
import { Provider, useSelector } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import {
  getFirebase,
  isLoaded,
  ReactReduxFirebaseProvider,
} from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import firebase from "./config/firebaseConfig";
import "./index.css";
import App from "./App";

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk.withExtraArgument({
      getFirebase,
    })
  )
);

const rrfProps = {
  firebase: firebase,
  config: {
    enableRedirectHandling: false,
  },
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) {
    return (
      <div>
        <div style={{ width: "100%", height: "100vh" }} role="status">
          <span>Loading...</span>
        </div>
      </div>
    );
  }
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
