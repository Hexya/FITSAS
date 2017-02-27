import React, { Component } from 'react';
import './header.css';

class Header extends React.Component {

  render() {

    return (
      <div>

        <div className="container">
          <div className="header">
            <div className="headerTop">
              <p className="topSent"><span className ="topTitle">FITSAS</span> FITNESS CONSEILS EXERCICE & PROGAMMES</p>
            </div>
            <div className="headerPara"></div>
            <div className="headerBot">
              <div className="list">
                <ul className="menuList">
                  <li>HOME</li>
                  <li>EXERCICES</li>
                  <li>PROGRAMMES</li>
                  <li>NUTRITION</li>
                  <li>COMPLEMENTS</li>
                  <li>LIFESTYLE</li>
                  <li>MOTIVATION</li>
                  <li>STORE</li>
                </ul>
              </div>
            </div>
          </div>

          
        </div>

      </div>
    );
  }
}

export default Header;
