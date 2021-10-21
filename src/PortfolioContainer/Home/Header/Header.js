import React, { useState } from 'react';
export {
  TOTAL_SCREENS,
  GET_SCREEN_INDEX,
} from '../../../utilities/commonUtilities';

import ScrollService from '../../../utilities/ScrollService';
import { faBars } from '@fontawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fontqwesome/react-font-awesome';
import './Header.css';
const Header = () => {
  const [selectedScreen, setSelectedScreen] = useState(0);
  const [headerOptions, showHeaderOptions] = useState(false);

  const updateCurrentScreen = (currentScreen) => {
    if (!currentScreen || !currentScreen.screenInView) {
      return;
    }

    let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView);

    if (screenIndex < 0) {
      return;
    }
  };

  let currentScreenSubscription = ScrollService.currentScreenBroadcaster.subscribe(updateCurrentScreen);
  return <div>test</div>;
};

export default Header;
