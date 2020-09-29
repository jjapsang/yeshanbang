import React from 'react';
import { Route, Switch } from "react-router-dom";

import MainContainer from "./MainContainer";
import CompanyContainer from "./CompanyContainer";
import ProductContainer from "./ProductContainer";
import ProcessContainer from "./ProcessContainer";
import ContactusContainer from "./ContactusContainer";

function PageRouter() {    
    return (
        <Switch>
            <Route exact path="/">
                <MainContainer />
            </Route>
            <Route path="/company">
                <CompanyContainer />
            </Route>
            <Route exact path="/product">
                <ProductContainer />
            </Route>
            <Route exact path="/process">
                <ProcessContainer />
            </Route>
            <Route exact path="/contactus">
                <ContactusContainer />
            </Route>
            {/* <Route exact path="/salary/payinfo">
                <SPayInfo handleCurrentMenu={this.props.handleCurrentMenu}/>
            </Route>
            <Route exact path="/salary/worktime">
                <SWorktime handleCurrentMenu={this.props.handleCurrentMenu}/>
            </Route>
            <Route exact path="/salary/condition">
                <SCondition handleCurrentMenu={this.props.handleCurrentMenu}/>
            </Route>
            <Route exact path="/salary/demand">
                <SDemand handleCurrentMenu={this.props.handleCurrentMenu}/>
            </Route> */}
        </Switch>
    )
}

export default PageRouter;