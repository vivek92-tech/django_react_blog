import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';


const home = () => (
    <div className= 'container'>
        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h3 className="display-4">Welcome to Django-React-Blog!</h3>
                <i className="lead">Blogging is to writing what extreme sports are to athletics: more free-form, more accident-prone, less formal, more alive. It is, in many ways, writing out loud.</i>
                <hr class="my-4" />
                    <br />
                        <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out the blog</Link>
                    
            </div>
        </div>
    </div>
);

export default home;