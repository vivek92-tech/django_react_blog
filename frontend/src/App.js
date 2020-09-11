import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Layout from './higherOrderComp/layout';
import Home from './Components/home';
import Blog from './Components/blog';
import BlogDetail from './Components/blogDetails';
import Category from './Components/category';

const App = () => {
    <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/blog' component={Blog} />
                <Route exact path='/category/:id' component={Category} />
                <Route exact path='/blog/:id' component={BlogDetail} />
            </Switch>
        </Layout>
    </Router>
};

export default App;