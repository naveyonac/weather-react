import React, { Component } from 'react';
import Axios from 'axios'
import OuterForm from './../Forms/OuterForm'

class OuterCollection extends Component {
    constructor() {
        super() 
        this.state = {
            outerClothes: [ ]
        }
    }

    componentDidMount() {
        Axios.get("http://localhost:1000/clothing/outer")
        .then((result) => {
            console.log(result)
            this.setState = {
                outerClothes: result.data
            }
        })
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
                <h3>Hello from the outer collection</h3>
                {/* {outerList} */}
                <OuterForm />
            </div>
        );
    }
}

export default OuterCollection;