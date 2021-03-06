import React from 'react';
import ReactDOM from 'react-dom';

class BirdAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
        };
    }

    render() {
        let url = this.state.bird.url.replace('//www.xeno-canto.org/','') + "/download"
        return(
            <>
                <audio controls="controls">
                    <source src={url} type="audio/mpeg" />
                </audio>
            </>
        )
    }
}

export default BirdAudio