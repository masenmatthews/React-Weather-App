import React from 'react';
import { Well } from 'react-bootstrap';

const Forecast = (props) => {
  return(
       <div className="forecast-results">
        {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
        {props.temperature && <p>Temperature: {props.temperature}</p>}
        {props.humidity && <p>Humidity: {props.humidity}</p>}
        {props.description && <p>Conditions:  {props.description}</p>}
        {props.error && <p>{props.error}</p>}
       </div>
   )
}
export default Forecast;
