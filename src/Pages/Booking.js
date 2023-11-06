import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [selectedSeat, setSelectedSeat] = useState('');
  const [studyYear, setStudyYear] = useState('');
  const [branch, setBranch] = useState('');
  const [busRoute, setBusRoute] = useState('');

  function handleSeatSelection(seatNumber) {
    setSelectedSeat(seatNumber);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    switch (name) {
      case 'studyYear':
        setStudyYear(value);
        break;
      case 'branch':
        setBranch(value);
        break;
      case 'busRoute':
        setBusRoute(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit() {
    console.log('Selected seat:', selectedSeat);
    console.log('Study year:', studyYear);
    console.log('Branch:', branch);
    console.log('Bus route:', busRoute);
  }

  return (
    <div className="booking-container">
      <h1>Bus Booking</h1>
      <div className="bus-layout">
        {/* Display a bus layout with radio buttons for seat selection */}
        {Array.from({ length: 30 }, (_, i) => i + 1).map(seatNumber => (
          <label key={seatNumber} className="seat-label">
            <input
              type="radio"
              name="seat"
              value={seatNumber}
              checked={selectedSeat === seatNumber}
              onChange={() => handleSeatSelection(seatNumber)}
            />
            <span className="seat-number">{seatNumber}</span>
          </label>
        ))}
      </div>
      <div className="form-field">
        <label htmlFor="studyYear">Study Year:</label>
        <input type="text" name="studyYear" value={studyYear} onChange={handleInputChange} className="input-field" />
      </div>
      <div className="form-field">
        <label htmlFor="branch">Branch:</label>
        <input type="text" name="branch" value={branch} onChange={handleInputChange} className="input-field" />
      </div>
      <div className="form-field">
        <label htmlFor="busRoute">Bus Route:</label>
        <select name="busRoute" value={busRoute} onChange={handleInputChange} className="select-field">
          <option value="">Select a route</option>
          {studyYear === '1'
            ? Array.from({ length: 10 }, (_, i) => i + 1).map(route => (
                <option key={route} value={`Route ${route}`}>Route {route}</option>
              ))
            : Array.from({ length: 15 }, (_, i) => i + 11).map(route => (
                <option key={route} value={`Route ${route}`}>Route {route}</option>
              ))
          }
        </select>
      </div>
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
}

export default Booking;
