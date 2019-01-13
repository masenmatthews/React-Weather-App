import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Forecast from './components/Forecast'

class App extends React.Component{
   render(){
    return(
      <div>
        <Header />
        <Form />
        <Forecast />
      </div>
   )
  }
}
export default App;
