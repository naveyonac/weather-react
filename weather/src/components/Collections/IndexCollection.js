import React, { Component } from 'react';
import './IndexCollection.css'
import OuterCollection from './OuterCollection'
import { Route, Link, BrowserRouter } from 'react-router-dom'

class IndexCollection extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                        <Link to='/index/outer'>Outer</Link>
                    <Route path="/index/outer"
                        component={OuterCollection}
                    />
                </BrowserRouter>
            </div>
        );
    }
}

export default IndexCollection;