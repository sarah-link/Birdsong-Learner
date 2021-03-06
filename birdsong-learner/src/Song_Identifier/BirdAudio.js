import React from 'react';
import ReactDOM from 'react-dom';
import BirdSonogram from "./BirdSonogram";
import"./BirdAudio.css";

class BirdAudio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
            isPlaying: false
        };
    }


    playPauseAudio() {
        let audio = document.getElementById('songAudio')
        console.log(audio.paused)
        console.log(audio.currentTime)

        //if it's playing, pause it
        if (!audio.paused) {
            this.setState({isPlaying: false})
            audio.pause()
        } else { //if it's paused, play it
            this.setState({isPlaying: true})
            audio.play()
        }

    }

    //gotta do this here cause onEnded isn't working for some reason...
    componentDidMount() {
        document.getElementById('songAudio').addEventListener('ended', this.audioEnded)
    }

    audioEnded = () => {
        console.log("here")
        this.setState({
            isPlaying: false
        })
    }

    render() {
        let url = this.state.bird.file.replace('//www.xeno-canto.org/','')
        return(
            <div id={"idenInfo"}>
                <BirdSonogram bird={this.state.bird}/>
                <audio id="songAudio">
                    <source src={url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
                <div id="audioControls">
                    <button id="playPause" onClick={() => this.playPauseAudio()}>{this.state.isPlaying ? "Pause" : "Play"}</button>
                </div>
            </div>
        )
    }
}

export default BirdAudio