import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Booking.css';
import axios from 'axios';

const Booking1 = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [parentName, setParentName] = useState('');
  const [parentMobileNumber, setParentMobileNumber] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const navigate = useNavigate();


  const areAllFieldsFilled = () => {
    return (
      firstName !== '' &&
      middleName !== '' &&
      lastName !== '' &&
      rollNumber !== '' &&
      collegeEmail !== '' &&
      mobileNumber !== '' &&
      parentName !== '' &&
      parentMobileNumber !== '' &&
      selectedYear !== ''
    );
  };

  const handleNextClick = () => {
    if (areAllFieldsFilled()) {
      // If all fields are filled, navigate to the next page
      navigate('/Booking2', {
        state: {
        firstName,
        middleName,
        lastName,
        rollNumber,
        collegeEmail,
        mobileNumber,
        parentName,
        parentMobileNumber,
        selectedYear,
      },
    });
    } else {
      // If not all fields are filled, show an alert
      alert("Please fill in all the form fields before proceeding.");
    }
  };

  return (
    <div className="container">
      <div className='inner-1'>
        <h3>Booking Form</h3>
        <form>
          {/* ... (existing form fields) */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">First Name</label>
            <input type="text" className="form-control" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Middle Name</label>
            <input type="text" className="form-control" id="name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="rollNumber" className="form-label">Roll Number</label>
            <input type="text" className="form-control" id="rollNumber" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="collegeEmail" className="form-label">College Email</label>
            <input type="email" className="form-control" id="collegeEmail" value={collegeEmail} onChange={(e) => setCollegeEmail(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
            <input type="tel" className="form-control" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="parentName" className="form-label">Father/Mother Name</label>
            <input type="text" className="form-control" id="parentName" value={parentName} onChange={(e) => setParentName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="parentMobileNumber" className="form-label">Father/Mother Mobile Number</label>
            <input type="tel" className="form-control" id="parentMobileNumber" value={parentMobileNumber} onChange={(e) => setParentMobileNumber(e.target.value)} />
          </div>
          <div className="mb-3">
          <label htmlFor="year"  className="form-label">Select Year</label>
          <br/>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="">-- Select --</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
          </div>
        </form>
        <div className='nxt-btn'>
          <button type="button" onClick={handleNextClick}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking1;
