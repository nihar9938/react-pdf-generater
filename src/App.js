import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Hospital from "./Hospital";
import MyDocument from "./Document";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Hospital} />
                <Route exact path='/pdfViewer' component={MyDocument} />
            </Switch>
        </Router>
    )
}

export default App
