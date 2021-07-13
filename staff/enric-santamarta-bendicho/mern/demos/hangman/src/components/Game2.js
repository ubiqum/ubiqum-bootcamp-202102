import React, { Component } from 'react'
import TextForm from './TextForm'

const MAX_ATTEMPS = 10

class Game extends Component {
    constructor() {
        super()

        this.state = {
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
        console.log(charOrWord)

        //const attemps = this.state.attemps
        const { state: { attemps }} = this // TODO learn js destructuring

        this.setState({ attemps: attemps + 1})
    }

    render() {
        const { state: { word, guessed, won, lose }, handleSubmitWord, handleSubmitGuess } = this

        return <div>
            {!word && <TextForm title="Enter a word" onSubmit={handleSubmitWord.bind(this)} />}
            {word && <div>
                {guessed}
                <TextForm title="Guess a character or the word" onSubmit={handleSubmitGuess.bind(this)} />
            </div>}
            {won && <p>you win!</p>}
            {lose && <p>you lose!</p>}
        </div>
    }
}

export default Game