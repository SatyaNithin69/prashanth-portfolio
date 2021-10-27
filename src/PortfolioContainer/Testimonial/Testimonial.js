import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Testimonial.css';

const Testimonial = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={'Testimonial'}
        subHeading={'What My Client Say About Me'}
      />
      <section className="testimonial-section" id={props.id || ''}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousal" id="testimonial-carousal">
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />I patronized Ehizeex and
                      when He delivered, I honestly fell in love with the
                      project He is a very honest guy and he delivers ontime.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul>
                      <li></li>
                    </ul>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Testimonial;
