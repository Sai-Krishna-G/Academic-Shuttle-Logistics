import React from 'react';
import "./profile.css";

const UserProfile = ({ firstName, middleName, lastName, rollNumber, collegeEmail, mobileNumber, parentName, parentMobileNumber, Year, BusRoute, BusStop, SeatNo }) => {
    return (
        <div className="container">
            <h1>User Profile</h1>
            <div className="row">
                <div className="col-md-6">
                    <h3>Personal Information</h3>
                    <p>First Name: {firstName}</p>
                    <p>Middle Name: {middleName}</p>
                    <p>Last Name: {lastName}</p>
                    <p>Roll Number: {rollNumber}</p>
                    <p>College Email: {collegeEmail}</p>
                    <p>Mobile Number: {mobileNumber}</p>
                </div>
                <div className="col-md-6">
                    <h3>Parent Information</h3>
                    <p>Parent Name: {parentName}</p>
                    <p>Parent Mobile Number: {parentMobileNumber}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h3>Academic Information</h3>
                    <p>Year: {Year}</p>
                </div>
                <div className="col-md-6">
                    <h3>Transportation Information</h3>
                    <p>Bus Route: {BusRoute}</p>
                    <p>Bus Stop: {BusStop}</p>
                    <p>Seat No: {SeatNo}</p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
