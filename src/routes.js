import React from "react";
import { HashRouter, Route} from "react-router-dom";

//import the components
import Main from "./components/main";
import Tech from "./components/tech";

const Routes = () => (
   
        <HashRouter basename='/'>
            <Route exact path="/" component={Main} />
            <Route exact path="/tech" component={Tech} />
        </HashRouter>
       
) 

export default Routes;
