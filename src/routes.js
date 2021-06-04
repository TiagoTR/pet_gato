import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' exact component={About}/>
                <Route path='/services' exact component={Services}/>
                <Route path='/contact' exact component={Contact}/>

                {/*<Route path='*' component={Error404}/>*/}
            </Switch>
        </BrowserRouter> 
    )
};