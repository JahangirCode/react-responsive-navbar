import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import routes from './Routes/routes';

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    {routes.map((route) => (
                        <Route
                            exact
                            key={route.path}
                            path={route.path}
                            component={route.component}
                            isPrivate={route.isPrivate}
                        />
                    ))}
                </Switch>
            </Router>
        </>
    );
}

export default App;
