import React from 'react';
// import people from '../../assets/people.png';
import yoga from '../../assets/5184243.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Zen : Yoga and Pilates</h1>
      <p>Computer Assisted Yoga and Pilates training system. Users get real time feedback on their posture, 
        performance and correction needed. Helps diminish the need for a yoga or pilates coach
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address"/>
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={yoga} />
    </div>
  </div>
);

export default Header;