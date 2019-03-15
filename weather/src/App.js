import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Weather from './components/Weather'
import Conditions from './components/conditions'
import Axios from 'axios';


const API_KEY = '91f251363896c0e654be767934d17cb0'

class App extends Component {
  state = {
    name: '',
    temp: '',
    humidity: '',
    description: ''
  }
  getWeather = async (e) => {
  e.preventDefault()
  const zip = e.target.elements.zip.value
  await Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`)
    .then((response) => {
      this.setState({
          temp: response.data.main.temp,
          name: response.data.name,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description
        })
      })
    }
  render() {
    return (
      <div className="App">
        <div className='Menu'>
          <h1>React Weather Tracker!</h1>
        </div>
        <div className='Form'>
          <Form getWeather={this.getWeather}/>
        </div>

          <Weather weather={this.state}/>
          <Conditions />
      </div>
    );
  }
}

export default App;
