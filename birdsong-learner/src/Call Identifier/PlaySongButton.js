import React from 'react';
import ReactDOM from 'react-dom';

class PlaySongButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
        };
    }

    playSong = () => {
        let url = String(this.state.bird.url).replace('//www.xeno-canto.org/','') + "/download"
        let a = new Audio(url);
        a.play()
    }

    render() {
        return(
            <button id="playSong" onClick={this.playSong}>Play</button>
        )
    }
}

export default PlaySongButton