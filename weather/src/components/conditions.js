import React, { Component } from 'react';

class conditions extends Component {
    // displayCondition = () => {
    //     if (this.props.condition === 'Rain') {
    //         console.log('rain')
    //     }
    // }
    componentDidMount() {
        
    }
    render() {
        return (
            <div>
                {this.props.condition}
            </div>
        );
    }
}

export default conditions;