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
        // const {state: {attemps}} = this
        // TODO learn js destructuring


        if (charOrWord.length === 1) {
            this.handleGuessedCharacter(charOrWord)
        } else {
            this.handleGuessedWord(charOrWord)
        }

    }


    handleGuessedCharacter(charOrWord) { // use from state
        let { state: { word, guessed, attemps, correctAttemps } } = this

        guessed = [...guessed]

        for (var i = 0; i <= word.length; i++) {
            if (charOrWord === word[i]) {

                guessed[i] = charOrWord

                correctAttemps++

                
            }
        }
        attemps++
        
      
        // TODO check lose or win here

        this.setState({ guessed, attemps, correctAttemps }, () => { this.checkWinorLose() })
    }


    handleGuessedWord(charOrWord) {
         let { state: { word, attemps, correctAttemps,guessed } } = this

        if (charOrWord !== word) {

            attemps++

            this.setState({ attemps }, () => { this.checkWinorLose() })

        }
        if (charOrWord === word) {

            attemps++

            correctAttemps++

            guessed = charOrWord

            this.setState({ attemps,correctAttemps,guessed }, () => { this.checkWinorLose() })

        }
    }

    checkWinorLose() {

        if (this.state.attemps < MAX_ATTEMPS && this.state.correctAttemps === this.state.word.length) {
            this.setState({ won: true })
        }
        if (this.state.attemps === MAX_ATTEMPS) {
            this.setState({ lose: true })
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
                <p>You guessed {correctAttemps} Letters from {word.length}.</p>
            </div>}
            {won && <div><p>you win!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
            {lose && <div><p>you lose!</p><form onSubmit={this.handleSubmitRefresh}><button>Restart the Game</button></form></div>}
        </div>
    }
}

export default Game