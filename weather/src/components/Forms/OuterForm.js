import React, { Component } from 'react';
import Axios from 'axios';

class ClothingForm extends Component {
    constructor() {
        super()
        this.state = {
            purpose: 'outer',
            type: '',
            color: '',
            brand: '',
            condition: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.addClothingItem = this.addClothingItem.bind(this)
    }

    handleInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    addClothingItem = (e) => {
        e.preventDefault()
        Axios.post("http://localhost:1000/clothing/", this.state)
        .then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                <h4>Add new Outer clothing item</h4>
                <form onSubmit={this.addClothingItem}>
                    {/* <input type="text" name="purpose" placeholder="Outer" onChange={this.handleInput} value={this.state.purpose}/> */}
                    <input type="text" name="type" placeholder="Jacket, Hoodie, Sweater, etc.." onChange={this.handleInput} value={this.state.type}/>
                    <input type="text" name="color" placeholder="Red, blue, green" onChange={this.handleInput} value={this.state.color}/>
                    <input type="text" name="brand" placeholder="Nike, Addidas, Polo" onChange={this.handleInput} value={this.state.brand}/>
                    <input type="text" name="condition" placeholder="Snow, rain, cold, warm"onChange={this.handleInput} value={this.state.condition}/>
                    <button>Add Article</button>
                </form>
            </div>
        );
    }
}

export default ClothingForm;
