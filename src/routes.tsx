import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import informationHero from './informationHero.js';
import Home from './Home.js';
import description from './description.js';
/* */
function Routes(){
    return (
        <BrowserRouter>
            <Route path="https://inspiring-franklin-a8c642.netlify.app/" exact component={Home}/>
            <Route path="https://inspiring-franklin-a8c642.netlify.app/informationHero/:id" component={informationHero}/>
            <Route path="https://inspiring-franklin-a8c642.netlify.app/description/:idD/:id" component={description}/>
           
            
        </BrowserRouter>
    )
}
export default Routes;