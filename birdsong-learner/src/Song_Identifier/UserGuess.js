import React from 'react';
import "./UserGuess.css";

class UserGuess extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bird: this.props.bird,
            userGuess: '',
            isGuessCorrect: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userGuess: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        //clean up user input and common name just a bit
        let guess = this.cleanString(this.state.userGuess)
        let cleanedBird = this.cleanString(this.state.bird.en)
        console.log(guess)
        console.log(cleanedBird)
        this.setState({isGuessCorrect: (guess === cleanedBird)}, () => {
          console.log(this.state.isGuessCorrect)
        })

    }

    cleanString(str) {
        return String(str)
            .toLowerCase()
            .trim()
            .replaceAll("'","")
            .replaceAll("-","")
            .replaceAll(" ","")
    }



    render() {
        let feedback
        if (this.state.isGuessCorrect === false) {
            feedback = <p id="feedback" class="incorrect">Your guess is incorrect, try again</p>
        } else if (this.state.isGuessCorrect === true){
            feedback = <p id="feedback" class="correct">Correct!</p>
        } else {
            feedback = <p>&nbsp;</p>
        }
        return(
            <div id="userGuess">
                <label htmlFor="guess">Guess Bird:</label>
                <div className="break"></div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text"  className="textInput" value={this.state.userGuess} onChange={this.handleChange}/>
                    <input type="submit" className = "submitInput" value="Submit" />
                </form>
                {feedback}
            </div>
        )
    }
}

export default UserGuess