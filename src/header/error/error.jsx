import React from 'react'
import Header from '../header.jsx';
import './error.css';
import { Link } from 'react-router'

class Error extends React.Component {
  render() {
    return(
      <div><Header />
      <div className="error">
        <Link to="/"><div className="errorImg"></div></Link>
      </div>
    </div>
  );
}
}
export default Error;
