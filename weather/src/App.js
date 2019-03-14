import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Weather from './components/Weather'
import Axios from 'axios';


const API_KEY = '91f251363896c0e654be767934d17cb0'

class App extends Component {
  state = {
    name: '',
    temp: '',
    zip: '',
    humidity: '',
    description: ''
  }
  getWeather(e) {
    e.preventDefault()
    const zip = e.target.elements.zip.value
    const api_req = Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`).then(data => console.log(data))
    .then(
      this.setState({
        temp: api_req.main.temp
      })
    )
  }
  render() {
    return (
      <div className="App">
          <Form getWeather={this.getWeather}/>
          <Weather />
      </div>
    );
  }
}

export default App;
