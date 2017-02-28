import React, { Component } from 'react';
import './header.css';
import { Link } from 'react-router'

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
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/Error404">EXERCICES</Link></li>
                  <li><Link to="/Programmes">PROGRAMMES</Link></li>
                  <li><Link to="/Error404">NUTRITION</Link></li>
                  <li><Link to="/Error404">COMPLEMENTS</Link></li>
                  <li><Link to="/Error404">LIFESTYLE</Link></li>
                  <li><Link to="/Error404">MOTIVATION</Link></li>
                  <li><Link to="/Error404">STORE</Link></li>
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
