import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Main from "../main/main";
import Basket from "../basket/basket";
import NotPage from "../not-page/not-page";
import About from "../about/about";
import Home from "../home/home";
import Product from "../product/product";
import Success from "../success/success";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/basket" component={Basket}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/success" component={Success}/>
        <Route exact path="/product" component={Product}/>

        <Route component={NotPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
