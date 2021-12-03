// import setHours from "date-fns/setHours";
// import setMinutes from "date-fns/setMinutes";

export const setAppointment = (formData) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();

    const appointmentDate = formData.appointmentDate;
    console.log(appointmentDate.getTime());
    console.log(appointmentDate.getHours());
    console.log(appointmentDate.getMinutes());

    firestore
      .collection("appointments")
      .add({
        ...formData,
        status: "Pendiente",
      })
      .then(() => {
        const appointmentDate = formData.appointmentDate;
        const dateString = formData.appointmentDate.toLocaleDateString().replace(/\//g, "-");
        console.log(dateString);
        firestore
          .collection("appointmentDates")
          .doc(dateString)
          .set(
            {
              // date: firebase.firestore.FieldValue.arrayUnion(
              //   formData.appointmentDate
              // ),
              date: firebase.firestore.FieldValue.arrayUnion(
                {
                  hours: appointmentDate.getHours(),
                  minutes: appointmentDate.getMinutes(),
                  dateInMillis: appointmentDate.getTime()
                }
              ),
            },
            { merge: true }
          )
          .then(() => {
            dispatch({
              type: "SET_APPOINTMENT",
            });
          });
      })
      .catch((err) => {
        dispatch({
          type: "SET_APPOINTMENT_ERROR",
        });
      });
  };
};

export const conductAppointment = (proceedingForm, newDietForm, clientId, appointmentId) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = firebase.firestore();
    

    firestore
      .collection("users")
      .doc(clientId)
      .collection("progress")
      .doc(appointmentId)
      .set({
        ...proceedingForm,
        createdAt: new Date().getTime(),
      })
      .then(() => {
        dispatch({
          type: "CONDUCT_APPOINTMENT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "CONDUCT_APPOINTMENT_ERROR",
        });
      });

    firestore
      .collection("users")
      .doc(clientId)
      .collection("diet")
      .doc("assignedDiet")
      .set({
        ...newDietForm,
        createdAt: new Date().getTime(),
      })
      .then(() => {
        dispatch({
          type: "CONDUCT_APPOINTMENT_ASSIGN_DIET",
        });
      })
      .catch((err) => {
        dispatch({
          type: "CONDUCT_APPOINTMENT_ASSIGN_DIET_ERROR",
        });
      });

    firestore.collection("appointments").doc(appointmentId).update({
      status: "Realizada"
    })
  };
};
