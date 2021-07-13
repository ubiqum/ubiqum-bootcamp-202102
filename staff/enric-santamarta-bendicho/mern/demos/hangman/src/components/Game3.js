import React, { Component } from 'react'
import TextForm from './TextForm'

const MAX_ATTEMPS = 10

class Game extends Component {
    constructor() {
        super()

        this.state = {
            correctAttemps: 0,
            attemps: 0,
            word: null,
            guessed: [],
            won: false,
            lose: false,
            reload: false
        }
    }

    handleSubmitWord(word) {
        const guessed = new Array(word.length)
        guessed.fill('-')

        this.setState({ word, guessed })
    }

    handleSubmitGuess(charOrWord) {
        // TODO check char or word. if char check and show it in guessed array. if word check if matches the word in state.
        //const attemps = this.state.attemps
        const { state: { attemps, correctAttemps } } = this // TODO learn js destructuring
      

        if (charOrWord.length === 1) {
            this.handleGuessedCharacter(charOrWord, attemps, correctAttemps)
        } else {
            this.handleGuessedWord(charOrWord, attemps)
        }

    }


    handleGuessedCharacter(charOrWord, attemps, correctAttemps) { // use from state
        let { state: { word, guessed } } = this

        guessed = [...guessed]

        for (var i = 0; i <= word.length; i++) {
            if (charOrWord === word[i]) {
                guessed[i] = charOrWord
                correctAttemps++

                // this.setState({ correctAttemps: correctAttemps + 1 }, () => { this.handleCorrectAttemps() })

                // this.setState({ attemps: attemps + 1 }, () => { this.handleMaxAttemps() })

                // this.handleSubmitShowedLetters(i, charOrWord)

            }
        }

        // TODO check lose or win here

        this.setState({ guessed, attemps: ++attemps, correctAttemps }, () => { this.handleMaxAttemps() })
    }

    handleSubmitShowedLetters(i, charOrWord) {

      // if(this.state.guessed[i] === ('-')){ 
        const guessed2 = this.state.guessed.slice()

        guessed2[i] = charOrWord 

        this.setState({ guessed: guessed2 })
       // }

    }

    handleGuessedWord(charOrWord, attemps) {

        if (charOrWord !== this.state.word) {

            this.setState({ attemps: attemps + 1 }, () => { this.handleMaxAttemps() })

        }
        if (charOrWord === this.state.word) {

            this.setState({ attemps: attemps + 1 }, () => { this.handleMaxAttemps() })

            this.setState({ guessed: charOrWord })

            this.setState({ won: true })


        }
    }

    handleMaxAttemps() {
        if (this.state.attemps === MAX_ATTEMPS) {
            this.setState({ lose: true })
        }
    }

    handleCorrectAttemps() {
        if (this.state.correctAttemps === this.state.word.length) {
            this.setState({ won: true })
        }
    }

    handleSubmitRefresh() {

        this.setState({ word: null })
    }


    render() {
        const { state: { word, guessed, won, lose, attemps, correctAttemps }, handleSubmitWord, handleSubmitGuess } = this

        return <div>
            {!word && <TextForm title="Enter a word" onSubmit={handleSubmitWord.bind(this)} />}
            {word && <div>
                {guessed}
                <TextForm title="Guess a character or the word" onSubmit={handleSubmitGuess.bind(this)} />
                <p>You have {MAX_ATTEMPS - attemps} tries.</p>
                <p>You guessed {correctAttemps} Letters from the secret Word.</p>
            </div>}
            {won && <div><p>you win!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
            {lose && <div><p>you lose!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
        </div>
    }
}

export default Game