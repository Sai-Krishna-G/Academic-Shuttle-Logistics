import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div className='about-container'>
      <Row>
        <Col>
          <h2>About Us</h2>
          <p>
            In the traditional manual method of managing college transport systems, students had to physically visit the transport office to select their bus route, stop, and seat. This process was time-consuming and inconvenient for both students and the transport staff. Students had to wait in long queues, wasting their valuable time, and the transport staff had to manually handle all the paperwork and seat allocations, leading to errors and inefficiencies.
          </p>
          <p>
            Our web application, College Transport Management System, aims to overcome these disadvantages by providing a user-friendly and efficient platform for students to select their bus route, stop, and seat. With our application, students can easily access the system from anywhere, at any time, using their smartphones or computers. They can view the available bus routes, stops, and seat availability in real-time, making the selection process quick and convenient. The system also automates the seat allocation process, eliminating manual errors and ensuring fair distribution of seats among students.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
