import React from 'react';
import ReactDOM from 'react-dom';
import BirdAudio from "./BirdAudio";
import UserGuess from "./UserGuess";
import"./SongIdentifier.css";

class SongIdentifier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            bird: null
        };
    }

    getBirdsByCountry = (country) => {
        /*a few parameters to narrow things down:
        type: song
        quality: greater than C (non-inclusive)
        length: 5-12 seconds
         */

        const url = "/api/2/recordings?query=cnt:" + country + "+type:song+q_gt:C+len:5-12"
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.getSingleCall(country, result.numPages)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getSingleCall = (country, numPages) => {
        //get one of the pages at random
        const randomPage = Math.floor(Math.random() * numPages) + 1;
        console.log("numPages: " + numPages)
        const url = "/api/2/recordings?query=cnt:" + country + "+type:song+q_gt:C+len:5-12&page=" + randomPage
        console.log("picked page: " + randomPage)
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {

                    //some birds are unknown, so keep trying until we get a known one
                    let birdHasId = false;
                    let bird = null;
                    while (birdHasId === false) {
                        const randomBirdId = Math.floor(Math.random() * result.recordings.length) + 1;
                        bird = result.recordings[randomBirdId]
                        if (bird.gen.toLowerCase() !== "mystery") {
                            birdHasId = true
                        }
                        console.log("total birds: " + result.recordings.length)
                        console.log("picked bird: " + randomBirdId)
                    }


                    //TODO: get 3 other random birds (from the same genus perhaps?) as multiple choice options

                    //we now have our single bird! Save to state
                    this.setState({
                        isLoaded: true,
                        bird: bird
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        // TODO: allow different countries
        //TODO: allow filtering birds by genus
        this.getBirdsByCountry("United_States")
    }

    render() {
        const { error, isLoaded, bird } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(this.state.bird)
            console.log(this.state.bird.en)
            return (
                    // {bird.en}
                <div id="identifier">
                    < br/>
                    < BirdAudio bird={this.state.bird}/>
                    < br/>
                    <UserGuess bird={this.state.bird}/>
                    {/*<BirdAudio/>*/}
                </div>
            );
        }
    }
}

export default SongIdentifier;