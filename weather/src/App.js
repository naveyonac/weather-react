import React, { Component } from 'react';
import './App.css';
import Form from './components/Forms/Form'
import Outer from './components/Outer'
import Weather from './components/Weather'
import Conditions from './components/conditions'
import { Route, BrowserRouter } from 'react-router-dom'
import IndexCollection from './components/Collections/IndexCollection'
// import ClothingForm from './components/ClothingForm'




class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='Menu'>
          <a href='/' component={App}>
            <h1>React Weather Tracker!</h1>
          </a>
            <div className='Nav'>
              <p>
                <a href='/index'>Clothing Wardrobe</a>
              </p>
              <p>
                <a href='/weather'>Check Weather</a>
              </p>
            </div>
        </div>
        {/*
          
          <Conditions condition={this.state.condition}/>
          <div className='ClothingReccommendations'>
          <Outer temp={this.state.temp}/>
          <ClothingForm /> 
        </div> */}
        <BrowserRouter>
          <Route path="/weather"
            component={Weather}
          />
        </BrowserRouter>
        <BrowserRouter>
          <Route path="/index"
            component={IndexCollection}
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
