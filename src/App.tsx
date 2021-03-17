import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '@layout/Header';
import Main from '@pages/Main';
import Todos from '@pages/Todos';

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/todos" component={Todos} />
            </Switch>
        </Router>
    );
}

export default App;
