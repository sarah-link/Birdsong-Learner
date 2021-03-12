import React from 'react';
import BirdSonogram from "./BirdSonogram";
import "./stylesheets/BirdAudio.css";


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
                    <button id="playPauseButton" onClick={() => this.playPauseAudio()}>{
                        this.state.isPlaying ?
                            //can't declare these as a variable for some reason
                            //TODO: clean this up?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="bi bi-pause-fill pause" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                 className="bi bi-play-fill play" viewBox="0 0 16 16">
                                <path
                                    d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                            </svg>

                            }
                    </button>
                </div>
            </div>
        )
    }
}

export default BirdAudio