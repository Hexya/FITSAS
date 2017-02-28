import React, { Component } from 'react';
import './body.css';
import { Link } from 'react-router'

class Body extends React.Component {

  render() {

    return (
      <div>

        <div className="body">
          <div className="bodyCont">
            {/* LEFT BLOC  */}
            <div className="leftBloc">

              <div className="lessonBloc">
                <div className="lessonImg"></div>
                <div className="lessonText"><p><span>Lorem ipsum dolor sit amet</span></p><p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
              </div>

              <div className="progBloc">
                <div className="progTitle">PROGRAMMES</div>
                <div className="progCont">
                  <div className="progImgBloc">
                    <div className="progText"><p><span>EPAULES ON FIRE:</span> Pour définir et exterminer ces épaules avec..</p></div>
                    <Link to="/Programmes"><div className="progImg"></div></Link>
                  </div>
                  <div className="progOthBloc">
                    <div className="progOth">
                      <Link to="/Programmes"><div className="othImg othImg1"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consectetur</span></p><p> Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... </p>
                      </div>
                    </div>
                    <div className="progOth">
                      <Link to="/Programmes"><div className="othImg othImg2"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consecteturadipisicing elit, sed do eiusmod tempor</span></p><p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... </p>
                      </div>
                    </div>
                    <div className="progOth">
                      <Link to="/Programmes"><div className="othImg othImg3"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></p><p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nutriBloc">
                <div className="progTitle">NUTRITION</div>
                <div className="progCont">
                  <div className="progImgBloc">
                    <div className="progText"><p><span>SALADE DE POISSON:</span> Accompagné de riz avec sa sauce noix...</p></div>
                    <Link to="/Error404"><div className="nutImg"></div></Link>
                  </div>
                  <div className="progOthBloc">
                    <div className="progOth">
                      <Link to="/Error404"><div className="othImg nutImg1"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consectetur</span></p><p> Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi... </p>
                      </div>
                    </div>
                    <div className="progOth">
                      <Link to="/Error404"><div className="othImg nutImg2"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consecteturadipisicing elit, sed do eiusmod tempor</span></p><p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam... </p>
                      </div>
                    </div>
                    <div className="progOth">
                      <Link to="/Error404"><div className="othImg nutImg3"></div></Link>
                      <div className="othText">
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></p><p> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="moreBloc">
                <div className="progTitle moreTitle">More...</div>
              </div>

            </div>
            {/* LEFT BLOC END */}

            {/* RIGHT BLOC  */}
            <div className="rightBloc">

              <div className="searchBloc">
                <div className="searchTitle">RECHERCHER</div>
                <input className="searchBar" type="text" placeholder="Rechercher..."></input>
              </div>

              <div className="aboBloc">
                <div className="aboTitle">PHOTOS ABONNES</div>
                <div className="aboImgCont">
                  <div className="aboImg"></div>
                </div>

                <div className="socBloc">
                  <div className="socTitle">NOUS SUIVRE</div>
                  <div className="socLog">
                    <div className="log"><i className="fa fa-facebook-square" aria-hidden="true"></i><p>Facebook</p></div>
                    <div className="log"><i className="fa fa-instagram" aria-hidden="true"></i><p>Instagram</p></div>
                    <div className="log"><i className="fa fa-twitter-square" aria-hidden="true"></i><p>Twitter</p></div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT BLOC END */}
          </div>
        </div>

      </div>
    );
  }
}

export default Body;
