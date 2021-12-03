import React from "react";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const CustomDatePicker = ({ formData, setFormData, appointmentDates }) => {
  useEffect(() => {
    excludeTimes(new Date());
  }, [appointmentDates]);

  const [excludedTimes, setExcludedTimes] = useState([]);

  const excludeTimes = (date) => {
    const dateString = date.toLocaleDateString().replace(/\//g, "-");
    appointmentDates && appointmentDates[dateString]
      ? setExcludedTimes(
          appointmentDates[dateString].date.map((date) => {
            return setHours(
              setMinutes(new Date(date.dateInMillis), date.minutes),
              date.hours
            );
          })
        )
      : setExcludedTimes([]);
  };

  const handleChange = (value) => {
    excludeTimes(value);
    setFormData({
      ...formData,
      appointmentDate: value,
      appointmentDateInMillis: value.getTime(),
    });
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy HH:mm:ss"
        showTimeSelect={true}
        minDate={new Date()}
        timeIntervals={60}
        filterTime={filterPassedTime}
        excludeTimes={excludedTimes}
        selected={formData.appointmentDate}
        onChange={(date) => handleChange(date)}
      />
    </>
  );
};

export default CustomDatePicker;
