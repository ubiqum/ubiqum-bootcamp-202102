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
            lose: false
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

        if (this.state.attemps === MAX_ATTEMPS) {
            this.setState({ lose: true })
        }
        else {
            if (charOrWord.length === 1) {
                for (var i = 0; i <= this.state.word.length; i++) {
                    if (charOrWord === this.state.word[i]) {
                        console.log(charOrWord)

                        const { state: { guessed } } = this

                        guessed[i] = charOrWord

                        this.setState({ guessed })

                        this.setState({ correctAttemps: correctAttemps + 1 })

                        this.setState({ attemps: attemps + 1 })

                    }
                    if (this.state.correctAttemps === this.state.word.length) {
                        this.setState({ won: true })
                    }
                }
            }
            else {
                if (charOrWord !== this.state.word) {

                    this.setState({ attemps: attemps + 1 })

                    console.log(this.state.attemps)

                }
                if (charOrWord === this.state.word) {
                    this.setState({ won: true })
                }
            }
            console.log(charOrWord)

        }
    }


    render() {
        const { state: { word, guessed, won, lose, attemps, correctAttemps }, handleSubmitWord, handleSubmitGuess } = this

        return <div>
            {!word && <TextForm title="Enter a word" onSubmit={handleSubmitWord.bind(this)} />}
            {word && <div>
                {guessed}
                <TextForm title="Guess a character or the word" onSubmit={handleSubmitGuess.bind(this)} />
                <p>You have {MAX_ATTEMPS - attemps} tries.</p>
                <p>You guessed {correctAttemps} so many Letters from the secret Word.</p>
            </div>}
            {won && <p>you win!</p>}
            {lose && <div><p>you lose!</p><button>Restart the Game</button></div>}
        </div>
    }
}

export default Game