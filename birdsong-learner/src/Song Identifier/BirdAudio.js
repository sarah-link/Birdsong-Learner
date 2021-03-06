import React from 'react';
import ReactDOM from 'react-dom';
import BirdSonogram from "./BirdSonogram";

class BirdAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
        };
    }

    render() {
        let url = this.state.bird.file.replace('//www.xeno-canto.org/','')
        return(
            <>
                <BirdSonogram bird={this.state.bird}/>
                <audio controls="controls">
                    <source src={url} type="audio/mpeg" />
                </audio>
            </>
        )
    }
}

export default BirdAudio