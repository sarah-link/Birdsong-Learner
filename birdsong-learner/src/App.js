import React, { Fragment, useState, useEffect} from 'react';
import './App.css';
import SongIdentifier from "./Song_Identifier/SongIdentifier";
// import { HashRouter, Route, Link } from "react-router-dom";
//
// import {
//     BrowserRouter as Router,
//     Switch,
// } from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <HashRouter basename='/'>
            // <Router>
            //     <div className="App">
            //         {/*<NavBar />*/}

                    <SongIdentifier />
            //
            //     </div>
            // </Router>
            // </HashRouter>
        );
    }
}

export default App;
