import React from 'react';
import '../App.css';
import { PageHeader } from 'react-bootstrap';

const Header = (props) =>{
  return (
    <div className="main-head">
      <PageHeader>
        Welcome to the Weather App! Enter a location to get weather information.
      </PageHeader>
    </div>
  )
}
export default Header;
