import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import OutsideFrame from './Components/OutsideFrame';

class App extends Component {
    render(){
        return (
            <Router>
                <Switch>
                    <Route path="/">
                        <OutsideFrame />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
