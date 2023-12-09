import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/steering.png';
import icon from '../../images/seat.png';
import icon1 from '../../images/seat1.png';
import axios from 'axios';

const SeatSelection = (props) => {
  const navigate = useNavigate();
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
  } = props.state;

  console.log(props)

  const [row1, setRow1] = useState(props.data[0].seats.Row1);

  const [row2, setRow2] = useState(props.data[0].seats.Row2);

  const [row3, setRow3] = useState(props.data[0].seats.Row3);

  const [selectedSeat, setSelectedSeat] = useState('');

  const onSelectRow = (row, setRow, index) => {
    let tempRow = [...row];
    tempRow.forEach((item, ind) => {
      if (index === ind) {
        if (item.selected === true) {
          item.selected = false;
          item.empty = true;
          setSelectedSeat('');
        } else {
          item.selected = true;
          item.empty = false;
          if (selectedSeat !== '') {
            selectedSeat.selected = false;
            selectedSeat.empty = true;
          }
          setSelectedSeat(item);
        }
      } else {
        item.selected = false;
      }
    });
    setRow(tempRow);
  };
  function updateSeat(routeName, seatNumber) {
    const data = {
      routeName: routeName,
      seatNumber: seatNumber,
    };
  
    axios.post("http://localhost:5000/api/authorization/updateseats", data, { headers: { 'auth-token': localStorage.getItem('token') } })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.response.data);
      });
  }


  
  function handleClick() {
    const authToken = localStorage.getItem("token");
    console.log("Auth Token:", authToken);
     axios.post("http://localhost:5000/api/authorization/booking", {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      rollNumber: rollNumber,
      collegeEmail: collegeEmail,
      mobileNumber: mobileNumber,
      parentName: parentName,
      parentMobileNumber: parentMobileNumber,
      selectedYear: selectedYear,
      selectedRoute: props.selectedRoute,
      selectedStop: props.selectedStop,
      seatNumber: selectedSeat.seatNumber,
    }, { headers: {
      "auth-token": authToken
    } })
      .then(response => {
        console.log('Success:', response.data);
      })
      .catch(error => {
        console.error('Error:', error.response.data);
      });
      updateSeat(props.selectedRoute, selectedSeat.seatNumber);
    alert('Booking Successful');
    navigate('/');
  }
  // console.log(selectedSeat.seatNumber)

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ margin: '60px', width: '400px', height: '500px', borderWidth: 1, borderRadius: 5, borderColor: '#8e8e8e' }}>
        <Image source={logo} style={{ width: '60px', height: '60px', alignSelf: 'flex-end' }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <FlatList
              data={row1}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{ margin: 7 }}
                  onPress={() => {
                    if (item.selected === false && item.empty === false) {
                      alert('Already booked');
                    } else {
                      onSelectRow(row1, setRow1, index);
                    }
                  }}
                >
                  {item.empty === false && item.selected === true ? (
                    <Image source={icon1} style={{ width: 25, height: 25, tintColor: 'green', margin: 2, marginRight: 25 }} />
                  ) : item.empty === true && item.selected === false ? (
                    <Image source={icon} style={{ width: 25, height: 25, margin: 2, marginRight: 25 }} />
                  ) : item.empty === false && item.selected === false ? (
                    <Image source={icon1} style={{ width: 25, height: 25, tintColor: '#8e8e8e', margin: 2, marginRight: 25 }} />
                  ) : null}
                </TouchableOpacity>
              )}
            />
          </View>
          <View>
            <FlatList
              data={row2}
              numColumns={2}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={{ margin: 7 }}
                  onPress={() => {
                    if (item.selected === false && item.empty === false) {
                      alert('Already booked');
                    } else {
                      onSelectRow(row2, setRow2, index);
                    }
                  }}
                >
                  {item.empty === false && item.selected === true ? (
                    <Image source={icon1} style={{ width: 25, height: 25, tintColor: 'green', margin: 2, marginRight: 25 }} />
                  ) : item.empty === true && item.selected === false ? (
                    <Image source={icon} style={{ width: 25, height: 25, margin: 2, marginRight: 25 }} />
                  ) : item.empty === false && item.selected === false ? (
                    <Image source={icon1} style={{ width: 25, height: 25, tintColor: '#8e8e8e', margin: 2, marginRight: 25 }} />
                  ) : null}
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={row3}
            horizontal
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={{ margin: 7 }}
                onPress={() => {
                  if (item.selected === false && item.empty === false) {
                    alert('Already booked');
                  } else {
                    onSelectRow(row3, setRow3, index);
                  }
                }}
              >
                {item.empty === false && item.selected === true ? (
                  <Image source={icon1} alt="Seat-image" style={{ width: 25, height: 25, tintColor: 'green', margin: 1.5, marginRight: 25 }} />
                ) : item.empty === true && item.selected === false ? (
                  <Image source={icon} alt="Seat-image" style={{ width: 25, height: 25, margin: 1.5, marginRight: 25 }} />
                ) : item.empty === false && item.selected === false ? (
                  <Image source={icon1} alt="Seat-image" style={{ width: 25, height: 25, tintColor: '#8e8e8e', margin: 1.5, marginRight: 25 }} />
                ) : null}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      {/* <View style={{ position: 'absolute', bottom: 0, backgroundColor: '#fff', height: 60, width: '100%', elevation: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ color: '#000', marginLeft: '600px' }}>{'Selected Seats(' + getAllSeats() + ')'}</Text>
        <TouchableOpacity style={{ width: '30px', height: '10px', backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', marginRight: '600px' }}>
          <Text style={{ color: 'green' }}>Book Now</Text>
        </TouchableOpacity>
      </View> */}
      <div className='nxt-btn'>
          <button type="button" onClick={handleClick}>
            SUBMIT
          </button>
        </div>
    </View>
    
  );
};

export default SeatSelection;

