import React, { Component } from 'react';
import OuterCollection from './OuterCollection'
import { Route, BrowserRouter } from 'react-router-dom'

class IndexCollection extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Route path="/outer" component={OuterCollection} />
                </BrowserRouter>

                <h3>Index collection</h3>
            </div>
        );
    }
}

export default IndexCollection;