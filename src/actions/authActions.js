import { actionTypes } from "redux-firestore";

export const signIn = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({
          type: "SIGN_IN",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_ERR",
          err,
        });
      });
  };
};

export const registerNewClient = (formData) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const currentUser = firebase.auth().currentUser;
    firebase
      .auth()
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.uid);
        return firestore
          .collection("users")
          .doc(user.uid)
          .set({
            uid: user.uid,
            name: formData.name,
            email: formData.email,
            dateOfBirth: formData.dateOfBirth,
            phoneNumber: formData.phoneNumber,
            goal: formData.goal,
            status: formData.status,
            rol: "Cliente"
          })
          .then(() => {
            firebase.auth().updateCurrentUser(currentUser);
            dispatch({
              type: "SIGN_UP",
            });
          });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGN_OUT",
        });
        dispatch({
          type: actionTypes.CLEAR_DATA,
        });
      });
  };
};
