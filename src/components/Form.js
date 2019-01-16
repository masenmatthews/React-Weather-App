import React from 'react';
import '../App.css';

class Form extends React.Component{
  render() {
    return (
      <form class="input-form" onSubmit = {this.props.loadWeather}>
        <input type="text" name="city" placeholder="City..."/>
        <input type="text" name="country" placeholder="Country..."/>
        <button class="submit">Show Forecast</button>
      </form>
    )
  }
}
export default Form;
