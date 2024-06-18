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
      onSubmit({ name, phoneNumber, selectedDate, selectedTime });
      setName('');
      setPhoneNumber('');
      setSelectedDate(null);
      setSelectedTime(null);
    };

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
            {/* Add your time slot options here */}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm
