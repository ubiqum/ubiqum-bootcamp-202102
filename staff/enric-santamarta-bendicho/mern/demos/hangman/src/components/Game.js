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
        const { state: { attemps } } = this // TODO learn js destructuring
        const { state: { correctAttemps } } = this

        if (charOrWord.length === 1) {
            this.handleGuessedCharacter(charOrWord, attemps, correctAttemps)

        }
        else {
            this.handleGuessedWord(charOrWord, attemps)
        }

    }


    handleGuessedCharacter(charOrWord, attemps, correctAttemps) {

        for (var i = 0; i <= this.state.word.length; i++) {
            if (charOrWord === this.state.word[i]) {

                this.handleSubmitShowedLetters(i, charOrWord)

                this.setState({ correctAttemps: correctAttemps + 1 }, () => { this.handleCorrectAttemps() })

                this.setState({ attemps: attemps + 1 }, () => { this.handleMaxAttemps() })

            }
        }
    }

    handleSubmitShowedLetters(i, charOrWord) {
        const { state: { guessed } } = this

        guessed[i] = charOrWord

        this.setState({ guessed: guessed })


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
        window.location.reload()
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