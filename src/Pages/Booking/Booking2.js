import React, { useState, useEffect } from 'react';
import Data from './Data'; 
import './Booking.css';
import SeatSelection from './SeatSelection';
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Booking2 = () => {
  const { state } = useLocation();
  console.log(Data);
  const {
    firstName,
    middleName,
    lastName,
    rollNumber,
    collegeEmail,
    mobileNumber,
    parentName,
    parentMobileNumber,
    selectedYear,
  } = state;
  const nav = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState('');
  const [selectedStop, setSelectedStop] = useState('');
  const [data, setData] = useState([]);
  const handleRouteChange = (event) => {
    const selectedRoute = event.target.value;
    setSelectedRoute(selectedRoute);
    setData(data.filter(item => item.route_name === selectedRoute));
    // console.log(data);
    setSelectedStop('');
  };

  const handleStopChange = (event) => {
    const selectedStop = event.target.value;
    if (!selectedRoute) {
      alert('Please select Bus Route first.');
      return;
    }
    setSelectedStop(selectedStop);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!localStorage.getItem("token")) {
          nav("/");
        }
        const response = await axios.get('http://localhost:5000/api/authorization/fetchseats');
        setData(response.data.route);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  
  return (
    < >
    <div className="container" id="booking-container">
      <div className="inner-1">
        <h3>Booking Form</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="bus-route" className="form-label">
              Bus Route:
              <select
                className="form-control"
                id="bus-route"
                value={selectedRoute}
                onChange={handleRouteChange}
              >
                <option value=""  >Select Bus Route</option>
                {selectedYear === 1 && Data.juniorStopes.map((route) => (
                  <option key={route.Route} value={route.Route}>
                    {route.Route}
                  </option>
                ))}
                {selectedYear > 1 && Data.seniorStopes.map((route) => (
                  <option key={route.Route} value={route.Route}>
                    {route.Route}
                  </option>
                ))}
              </select>
            </label>
          </div>
         <br />

          <div className="mb-3">
            <label htmlFor="bus-stop" className="form-label">
              Bus Stop:
              <select
                className="form-control"
                id="bus-stop"
                value={selectedStop}
                onChange={handleStopChange}
                disabled={!selectedRoute}
              >
                <option value="">Select Bus Stop</option>
                {selectedRoute &&
                  selectedYear < 1 ?
                  Data.juniorStopes
                    .find((route) => route.Route === selectedRoute)
                    ?.Stopes.map((stop) => (
                      <option key={stop} value={stop}>
                        {stop}
                      </option>
                    )) : Data.seniorStopes
                    .find((route) => route.Route === selectedRoute)
                    ?.Stopes.map((stop) => (
                      <option key={stop} value={stop}>
                        {stop}
                      </option>
                    ))}
              </select>
            </label>
          </div>
        </form>
        <br />
        { selectedRoute !== '' && (<label htmlFor="seat-selection" className="form-label">
            <SeatSelection 
              data={data}
              state={state}
              selectedRoute={selectedRoute}
              selectedStop={selectedStop}
            />
        </label>)}
      </div>
    </div>
    </>
  );
};

export default Booking2;
