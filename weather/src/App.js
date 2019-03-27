import React, { Component } from 'react';
import './App.css';
// import Form from './components/Forms/Form'
// import Outer from './components/Outer'
import Weather from './components/Weather'
// import Conditions from './components/conditions'
import { Route, Link, BrowserRouter } from 'react-router-dom'
import IndexCollection from './components/Collections/IndexCollection'
// import ClothingForm from './components/ClothingForm'




class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='Menu'>
            <Link to='/' component={App}>
              <h1>Weather Tracker</h1>
            </Link>
              <div className='Nav'>
                <p>
                  <Link to='/index'>Clothing Wardrobe</Link>
                </p>
                <p>
                  <Link to='/weather'>Check Weather</Link>
                </p>
              </div>
          </div>
        <Route path="/index"
        component={IndexCollection}
        />
        <Route path="/weather"
        component={Weather}
        />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*
  
  <Conditions condition={this.state.condition}/>
  <div className='ClothingReccommendations'>
  <Outer temp={this.state.temp}/>
  <ClothingForm /> 
</div> */