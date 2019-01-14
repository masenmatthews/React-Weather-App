import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Forecast from './components/Forecast'

const Api_Key = "ccadac3b1a40d8a243177e87aaac3c13";

class App extends React.Component{
  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json()
    console.log(response);

  }

   render(){
    return(
      <div>
        <Header />
        <Form loadWeather={this.getWeather} />
        <Forecast />
      </div>
   )
  }
}

export default App;
