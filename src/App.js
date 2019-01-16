import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Forecast from './components/Forecast'

const Api_Key = "ccadac3b1a40d8a243177e87aaac3c13";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getForecast = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
    const response = await api_call.json()
    console.log(response);
    if(city && country){
    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
  }else{
      this.setState({
        error: "Please input search values..."
      })
    }
  }

   render(){
    return(
      <div class="form-content">
        <Header />
        <Form loadWeather={this.getForecast} />
        <Forecast
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
   )
  }
}

export default App;
