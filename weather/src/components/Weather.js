import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                <p>City: {this.props.weather.name}</p>
                <p>Temperature: {this.props.weather.temp}°F</p>
                <p>Humidity: {this.props.weather.humidity}%</p>
                <p>Description: {this.props.weather.description}</p>
            </div>
        );
    }
}

export default Weather;