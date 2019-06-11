import React, { Component } from 'react';
import Axios from 'axios';
import Form from './Forms/Form'
let zipcodes = require('zipcodes')

const API_KEY = '91f251363896c0e654be767934d17cb0'

class Weather extends Component {
    state = {
        name: '',
        temp: '',
        humidity: '',
        description: '',
        condition: ''
      }
      getWeather = async (e) => {
      e.preventDefault()
      //allows me to takes the users zip input and pass it into the search
      const zip = e.target.elements.zip.value
      let cityName = zipcodes.lookup(zip).city
    //   console.log(cityName)
      await Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`)
        .then((response) => {
            console.log(response)
          this.setState({
              temp: response.data.main.temp,
              name: cityName,
              humidity: response.data.main.humidity,
              description: response.data.weather[0].description,
              condition: response.data.weather[0].main
            })
          })
        }
    render() {
        return (
            <div>
                <div className='Form'>
                    <Form getWeather={this.getWeather}/>
                </div>
                <p>City: {this.state.name}</p>
                <p>Temperature: {this.state.temp}°F</p>
                <p>Humidity: {this.state.humidity}%</p>
                <p>Description: {this.state.description}</p>
            </div>
        );
    }
}

export default Weather;