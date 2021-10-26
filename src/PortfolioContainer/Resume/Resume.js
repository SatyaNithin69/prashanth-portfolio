import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css';

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) {
      return;
    }
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => (
    <div className="resume-heading">
      <div className="resume-main-heading">
        <div className="heading-bullet"></div>
        <span>{props.heading ? props.heading : ''}</span>
        {props.fromDate && props.toDate ? (
          <div className="heading-date">
            {props.fromDate + '_' + props.toDate}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="resume-sub-heading">
        <span>{props.subHeading ? props.subHeading : ''}</span>
      </div>

      <div className="resume-heading-description">
        <span>{props.description ? props.description : ''}</span>
      </div>
    </div>
  );

  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'intrests.svg' },
  ];

  const programmingSkillDetails = [
    { skill: 'Javascript', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 85 },
    { skill: 'Node JS', ratingPercentage: 85 },
    { skill: 'MongoDB', ratingPercentage: 85 },
    { skill: 'HTML', ratingPercentage: 85 },
    { skill: 'CSS', ratingPercentage: 85 },
  ];

  const projectDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Mobile E-shop',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'An ecommerce application designed to sell products online wth payment system integration.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'Ecommerce Website',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe.',
      subHeading:
        'Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Bootstrap.',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'University of Legon Accra, Ghana'}
        subHeading={'BACHELOR OF SCIENCE INFORMATION TECHNOLOGY'}
        fromDate={'2014'}
        toDate={'2018'}
      />

      <ResumeHeading
        heading={'National Youth Service Corps'}
        subHeading={'Ministry Of Science And Technogy. Uyo Akwa Ibom State'}
        fromDate={'2019'}
        toDate={'2020'}
      />

      <ResumeHeading
        heading={'High School'}
        subHeading={'Command Secondary School Mbiri'}
        fromDate={'2007'}
        toDate={'2012'}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={'Ehizeex Technoloy'}
        subHeading={'FULL STACK DEVELOPER INTERN'}
        fromDate={'2021'}
        toDate={'present'}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          Currently working as MERN stack web and mobile developer and also an
          online instructor on udemy.
        </span>
        <br />
        <span className="resume-description-text">
          - Developed an ecommerce website for client with the dashboard for
          managing the products, managing reviews, users, payment etc. .
        </span>
        <br />
        <span className="resume-description-text">
          - Integrated the web app with backend services to create new user
          onboarding application with dynamic form content.
        </span>
        <br />
        <span className="resume-description-text">
          - I stretch my mental capacity to develope UI as per the given
          designs.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="intrests">
      <ResumeHeading
        heading="Teaching"
        subHeading="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        subHeading="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        subHeading="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;
    let newCarouselOffset = {
      style: {
        transform: 'translateY(' + index * offsetHeight * -1 + 'px)',
      },
    };
    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src="https://cdn.jsdelivr.net/gh/palakurthiprashanth/prashanth-portfolio@master/src/assets/Resume/education.svg"
          alt="no internet"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets"> {getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
