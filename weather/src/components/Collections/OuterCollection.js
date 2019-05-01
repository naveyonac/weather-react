import React, { Component } from 'react';
import Axios from 'axios'
// import OuterForm from './../Forms/OuterForm'

class OuterCollection extends Component {
    constructor() {
        super() 
        this.state = {
            outerClothes: null
        }
        this.showOuterClothes = this.showOuterClothes.bind(this)
    }

    componentDidMount() {
        Axios.get("http://localhost:1000/clothing/show")
        .then((result) => {
            console.log(result.data)
            this.setState = {
                outerClothes: [result.data]
            }
            // this.setState = {
            //     outerClothes: result.data
            // }
            console.log(this.state)
        })
    }
    showOuterClothes() {
        console.log(this.state.outerClothes)
    }
    render() {
        // let outerList = this.state.outerClothes.map(clothe => {
        //     return (
        //         <div className='individualArticle'>
        //             ${clothe.brand}
        //         </div>
        //     )
        // })
        return (
            <div>
                <p>Current collection</p>
                <p onClick={this.showOuterClothes}>Click</p>
                {/* {outerList} */}
                {/* <OuterForm /> */}
            </div>
        );
    }
}

export default OuterCollection;