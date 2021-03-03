import React, { Fragment, useState, useEffect} from 'react';
import './App.css';
import CallIdentifier from "./Call Identifier/CallIdentifier";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {

    }

    render() {
        return (
            <Router>
                <div className="App" onClick={this.handleClick}>
                    {/*<NavBar />*/}

                    <CallIdentifier />

                    {/*<Switch>    /!* overlays and popups *!/*/}
                    {/*    <Route path="/login">*/}
                    {/*    </Route>*/}

                    {/*    <Route path="/signup">*/}
                    {/*    </Route>*/}
                    {/*</Switch>*/}

                    {/*<Switch>    /!* main content *!/*/}
                    {/*    <Route path="/builder">*/}
                    {/*        <EncounterBuilder/>*/}
                    {/*    </Route>*/}

                    {/*    <Route path="/manager">*/}
                    {/*    </Route>*/}

                    {/*    <Route path="/library">*/}
                    {/*    </Route>*/}

                    {/*    <Route path="/join">*/}

                    {/*    </Route>*/}

                    {/*    <Route exact path="/">*/}
                    {/*        <Home />*/}
                    {/*    </Route>*/}
                    {/*</Switch>*/}

                </div>
            </Router>
        );
    }
}

export default App;
