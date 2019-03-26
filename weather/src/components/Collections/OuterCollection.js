import React, { Component } from 'react';
import Axios from 'axios'

class OuterCollection extends Component {
    constructor() {
        super() 
        this.state = {
            brand: '',
            color: '',
            condition: '',
            purpose: '',
            type: ''
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:1000/clothing/")
        .then((result) => {
            console.log(result)
        })
    }
    render() {
        return (
            <div>
                <p>Hello from outer collection</p>
            </div>
        );
    }
}

export default OuterCollection;