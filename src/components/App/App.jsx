import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.jsx';
import Blog from '../Blog/Blog.jsx';
import Page404 from '../Page404/Page404.jsx';

class App extends Component {
    render() {
        return (
            <Router>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/blog' component={Blog} />
                        <Route component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;
