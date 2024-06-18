import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };

    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

    const handleTimeChange = (time) => {
      setSelectedTime(time);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      const appointmentData = {
        doctorName,
        doctorSpeciality,
        patientName: name,
        phoneNumber,
        date: selectedDate,
        time: selectedTime,
      };
      localStorage.setItem('appointmentData', JSON.stringify(appointmentData));
      onSubmit(appointmentData);
      setName('');
      setPhoneNumber('');
      setSelectedDate(null);
      setSelectedTime(null);
    };

    const timeSlots = Array.from({ length: 8 }, (_, i) => {
      const hour = (i + 3) % 12 || 12;
      const period = (i + 3) >= 12 ? 'PM' : 'AM';
      return `${hour} ${period}`;
    });

    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time Slot:</label>
          <select id="time" value={selectedTime} onChange={(e) => handleTimeChange(e.target.value)} required>
            <option value="">Select a time slot</option>
            {timeSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm