import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import informationHero from './informationHero.js';
import Home from './Home.js';
import description from './description.js';
/* */
function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Home}/>
            <Route path="/informationHero/:id" component={informationHero}/>
            <Route path="/description/:idD/:id" component={description}/>
           
            
        </BrowserRouter>
    )
}
export default Routes;