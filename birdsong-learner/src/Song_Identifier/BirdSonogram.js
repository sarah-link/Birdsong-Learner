import React from 'react';
import "./stylesheets/BirdSonogram.css";

class BirdSonogram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird
        };
    }


    //TODO: show line across sonogram as audio plays
    render() {
        let url = "https:" + this.state.bird.sono.full
        return(
            <>
                <div id="sonogram" >
                <img src={url} id="sonogramImg" alt="Sonogram of bird song"/>
                <p className="credits">Recorded by: {this.state.bird.rec}</p>
                </div>
            </>
        )
    }
}

export default BirdSonogram