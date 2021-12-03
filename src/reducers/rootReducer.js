import { combineReducers } from "redux";
import { firebaseReducer} from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import appointmentReducer from "./appointmentReducer";
// import postReducer from "./postReducer";

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    authReducer,
    appointmentReducer
    // postReducer,
});

export default rootReducer;