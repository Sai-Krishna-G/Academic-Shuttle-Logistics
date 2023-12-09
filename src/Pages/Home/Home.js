import './Home.css'
import imageslide from './Data'
import { useState ,useEffect} from 'react'
import ActionAreaCard from './Card' 
import React from 'react'
import cbitbus from "../../images/cbitbus.png"
import bg from "../../images/hero-bg-bottom.png"
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers ,faBus ,faUserShield} from '@fortawesome/free-solid-svg-icons'


  const Home = () => {
  return (
    
    <main>
      
    <div>
    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',backgroundColor:'#f4f4f4' }}>
      Picture side 
      <div style={{ flex: 1 }}>*/}
     
     <section className="hero">
      <div className="row container">
        <div className="column">
        <h2>StudentShuttelConnect</h2>
        <p>Student Shuttel Connect provides bus transportation system,a facility to reserved seats and different types of enquiry which need an instant 
          quick reservation.It is a web software solutiondesigned to provide customers with a personalized easy-to-utilize user 
          experience for booking and purchasing bus tickets online. 
        </p>
        <div class="buttons">
          <button class="btn ">Read More</button>
          <button class="btn ">Contact Us</button>
        </div>
      </div>
      <div className="column">
        <img src={cbitbus} alt="Hero" class="hero_img"/>
        </div>
      </div>
      <img  src={bg} alt="" class="curveimg"/>
      </section>
     
    
  
      {/*<p>
          Your paragraph text goes here. You can add as much content as you want. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
  */}

      {/* Paragraph side */}
    
<div class="card-container"> 
<div class="card translate-grow">
  <span class="fa-icon"><FontAwesomeIcon icon={faBus} /></span>
    <h3>Attractive Journey</h3>
    <p>StudentShuttelConnect is committed to make your journey full of comfort & excitement.</p>
  </div>
  <div class="card translate-grow">
  <span class="fa-icon"><FontAwesomeIcon icon={faUsers} /></span>
    <h3>Ticket in Mobile</h3>
    <p>No fear of losing the ticket.</p>
  </div>
 
  <div class="card translate-grow">
  <span class="fa-icon"><FontAwesomeIcon icon={faUserShield} /></span>
    <h3>Safety and Security</h3>
    <p>StudentShuttelConnect assures it passengers a safe & secure journey.</p>
  </div>
  </div>
   

<Footer/>
</div>
</main>

    
  );
};

export default Home;