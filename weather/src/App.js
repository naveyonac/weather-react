import React, { Component } from 'react';
import './App.css';
import Form from './components/Forms/Form'
import Outer from './components/Outer'
import Weather from './components/Weather'
import Conditions from './components/conditions'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import OuterCollection from './components/Collections/OuterCollection'
// import ClothingForm from './components/ClothingForm'
import Axios from 'axios';


const API_KEY = '91f251363896c0e654be767934d17cb0'

class App extends Component {
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
  await Axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&units=imperial&appid=${API_KEY}`)
    .then((response) => {
      this.setState({
          temp: response.data.main.temp,
          name: response.data.name,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          condition: response.data.weather[0].main
        })
      })
    }
  render() {
    return (
      <div className="App">
        <div className='Menu'>
          <h1>React Weather Tracker!</h1>
          <p>Tops</p>
          <p>Bottoms</p>
          <Router>
              <Route path="/outer" Component={OuterCollection} />
          <Link to='/outer'>Outer Collection</Link>
          </Router>
        </div>
        <div className='Form'>
          <Form getWeather={this.getWeather}/>
        </div>

          <Weather weather={this.state}/>
          <Conditions condition={this.state.condition}/>
          <div className='ClothingReccommendations'>
            <Outer temp={this.state.temp}/>
            {/* <ClothingForm /> */}
          </div>
      </div>
    );
  }
}

export default App;
