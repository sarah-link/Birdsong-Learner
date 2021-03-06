import React from 'react';
import ReactDOM from 'react-dom';

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
            feedback = <p>Your guess is incorrect</p>
        } else if (this.state.isGuessCorrect === true){
            feedback = <p>Correct!</p>
        } else {
            feedback = <></>
        }
        return(
            <>
                <label htmlFor="guess">Guess Bird:</label> <br />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.userGuess} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                {feedback}
            </>
        )
    }
}

export default UserGuess