import React, { Component } from 'react';
import Axios from 'axios';

class Outer extends Component {
    componentDidMount() {
        Axios.get("http://localhost:1000/clothing/show")
        .then((response) => {
            console.log(response)
        })
    }
    render() {
        return (
            <div>
                {this.props.temp}
            </div>
        );
    }
}

export default Outer;