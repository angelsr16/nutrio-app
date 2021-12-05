export const sendMessage = (message) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    console.log(message);
    console.log(message.authorId);

    firestore
      .collection("chat")
      .doc(message.authorId)
      .set(
        {
          messages: firebase.firestore.FieldValue.arrayUnion({
            ...message,
            createdAt: new Date().getTime(),
          }),
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "SEND_MESSAGE",
        });
      })
      .catch((error) => {
        dispatch({
          type: "SEND_MESSAGE_ERROR",
        });
      });
  };
};
