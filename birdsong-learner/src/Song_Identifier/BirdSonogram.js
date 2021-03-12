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
        let url = this.state.bird.sono.full.replace('//www.xeno-canto.org/','')
        return(
            <>
                <div id="sonogram" >
                <img src={url} id="sonogramImg" />
                <p className="credits">Recorded by: {this.state.bird.rec}</p>
                </div>
            </>
        )
    }
}

export default BirdSonogram