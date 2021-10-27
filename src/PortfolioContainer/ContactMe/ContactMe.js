import React, { useState } from 'react';
import load from '../../images/load2.jpeg';
import imgBack from '../../images/mailz.jpeg';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import Typical from 'react-typical';
import './ContactMe.css';

const ContactMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [banner, setBanner] = useState('');
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setName(e.target.value);
  };
  const handleMessage = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="main-container" id={props.id || ''}>
      <ScreenHeading title={'Contact Me'} subHeading={'Lets Keep In Touch.'} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={['Get In Touch', 1000]} />
          </h2>
          <a href="#">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-google-plus-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here !!</h4>
            <img
              src="https://cdn.jsdelivr.net/gh/palakurthiprashanth/prashanth-portfolio@master/src/images/mailz.jpeg"
              alt="not found"
            />
          </div>
          <form>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text"
            onChange= {handleMessage}
            value= {me}
             />

            <div className="sned-btn">
              <button type="submit">
                Send <i className="fa fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
