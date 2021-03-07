import React from 'react';
import Foundation from './containers/Foundation';
import Purpose from './containers/Purpose';

import './styles.scss';

AboutUs.propTypes = {};
function AboutUs(props) {
  return (
    <div className="about-us">
      <div className="about-us__content">
        <Foundation />
        <Purpose />
      </div>
    </div>
  );
}

export default AboutUs;
