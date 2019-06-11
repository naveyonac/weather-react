import React, { Component } from 'react';


class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="zip" placeholder="Zip Code..."/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;