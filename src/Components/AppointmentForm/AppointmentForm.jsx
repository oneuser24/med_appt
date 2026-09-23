import React, { useState, useEffect } from 'react'

const timeSlots = ['08:00 AM',
                  '08:30 AM',
                  '09:00 AM',
                  '09:30 AM',
                  '10:00 AM',
                  '10:30 AM',
                  '11:00 AM',
                  '11:30 AM',
                  '01:00 PM',
                  '01:30 PM',
                  '02:00 PM',
                  '02:30 PM',
                  '03:00 PM',
                  '03:30 PM',
                  '04:00 PM',
                  '04:30 PM'];

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [apptDate, setApptDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);

    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber,  apptDate, selectedSlot});
      setName('');
      setPhoneNumber('');
      setApptDate('');
      setSelectedSlot('');
    };

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      setCurrentDate(`${year}-${month}-${day}`);
    }, []);

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
            pattern='[0-9]{10}'
          />
        </div>
        <div className="form-group">
          <label htmlFor="apptDate">Date of Appointment:</label>
          <input
            type="date"
            id="apptDate"
            value={apptDate}
            onChange={(e) => setApptDate(e.target.value)}
            required
            min={currentDate}
          />
        </div>
        <div className="form-group">
          <label htmlFor="apptTime">Time:</label>
          <select
            type="text"
            id="selectedSlot"
            value={selectedSlot}
            onChange={(e) => handleSlotSelection(e.target.value)}
            required
          >
            <option value=''>Select a time slot</option>
            {timeSlots.map(timeSlot => <option value={timeSlot}>{timeSlot}</option>)}
          </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;
