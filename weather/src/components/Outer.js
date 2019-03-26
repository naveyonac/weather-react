import React, { Component } from 'react';
// import Axios from 'axios';
import ClothingForm from './Forms/OuterForm'

class Outer extends Component {
    constructor() {
        super()
        this.state ={
            brand: '',
            color: '',
            condition: '',
            purpose: '',
            type: ''
        }
    }
    // componentDidMount() {
    //     Axios.get("http://localhost:1000/clothing/show")
    //     .then((response) => {
    //         // const arrayVar = response.data
    //         // const ranNum = (response.data)(Math.floor(Math.random()*(response.data).length))
    //         console.log(response)
    //         const ranItem = response.data[Math.floor(Math.random()*response.data.length)]
    //         this.setState({
    //             brand: response.data[ranItem],
    //             // color: 
    //             // condition: 
    //             // purpose: 
    //             // type: 
    //         })
    //     })
    // }
    //if the temp is under 40, sort through the array of outer clothes and pick a random one to wear
    checkTemp() {
        if(this.props.temp > 40) {
            
        }
    }
    render() {
        return (
            <div>
                <h2>Outer clothing section</h2>
                {this.state.brand}
                <ClothingForm />
            </div>
        );
    }
}

export default Outer;