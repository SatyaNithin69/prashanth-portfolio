import React, { useState } from 'react';
export {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from '../../../utilities/commonUtilities';
import Home from '../Home/Home';

const TOTAL_SCREENS = [
  {
    screen_name: 'Home',
    component: "Home",
  },
];

import ScrollService from '../../../utilities/ScrollService';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) {
      return;
    }

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);

    if (screenIndex < 0) {
      return;
    }
  };

  let currentScreenSubscription =
    ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);

  const getHeaderOptions = () => {
    debugger;
    return TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ));
  };

  const getHeaderOptionsClass = (index) => {
    let classes = 'header-option';
    if (index < TOTAL_SCREENS.length - 1) {
      classes += 'header-option-seperator';
    }

    if (selectedScreen === index) {
      classes += 'selected-header-option';
    }

    return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) {
      return;
    }
    screenComponent.scrollIntoView({
      behavior: 'smooth',
    });
    setSelectedScreen(index);
    setShowHeaderOptions(false);
  };

  return (
    <div>
      <div
        className="header-option"
        onClick={() => setShowHeaderOptions(!showHeaderOptions)}
      >
        <div className="header-parent">
          <div
            className="header-hamburger"
            onClick={() => setShowHeaderOptions(!showHeaderOptions)}
          >
            <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} />
          </div>
          <div className="header-logo">
            <span> PRASHANTH </span>
          </div>
          <div
            className={
              showHeaderOptions
                ? 'header-options show-hamburger-options'
                : 'hrader-options'
            }
          >
            {getHeaderOptions()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
