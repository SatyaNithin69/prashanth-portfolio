import React from 'react';
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
      </div>
    </div>
  );
};

export default ContactMe;
