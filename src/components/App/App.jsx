import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Blog from '../Blog/Blog.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home} />
                    <Route path='/blog' component={Blog} />
                </div>
            </Router>
        );
    }
}
export default App;
