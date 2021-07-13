import React, { Component } from 'react'
import TextForm from './TextForm'

const MAX_ATTEMPS = 10

class Game extends Component {
    constructor() {
        super()

        this.state = {
            letters: 0,
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
        //test if the user is trying to guess a word or just a letter from the word
        if (charOrWord.length === 1) {
            this.handleGuessedCharacter(charOrWord)
        } else {
            this.handleGuessedWord(charOrWord)
        }

    }


    handleGuessedCharacter(charOrWord) { // use from state
        let { state: { word, guessed, attemps, letters, won, lose } } = this

        guessed = [...guessed]

        for (var i = 0; i <= word.length; i++) {
            if (charOrWord === word[i]) {

                guessed[i] = charOrWord

                letters++

            }
        }

        attemps++
        //check if the user won or lose//
        if (attemps < MAX_ATTEMPS && letters === word.length) {

            won = true

            lose = false
        }

        if (attemps === MAX_ATTEMPS) {
            lose = true

            won = false
        }

        this.setState({ guessed, attemps, letters, won, lose })
    }


    handleGuessedWord(charOrWord) {
        let { state: { word, attemps, letters, guessed, won, lose } } = this

        if (charOrWord !== word) {

            attemps++
            //check if the user won or lose//
            if (attemps === MAX_ATTEMPS) {

                lose = true

                won = false

            }

            this.setState({ attemps, lose, won })
        }
        if (charOrWord === word) {
            //check if the user won or lose//
            won = true

            lose = false

            letters = word.length

            attemps++

            guessed = charOrWord

            this.setState({ attemps, letters, guessed, won, lose })

        }
    }

    handleSubmitRefresh() {
        //start the game again
        this.setState({ word: null })
    }


    render() {
        const { state: { word, guessed, won, lose, attemps, letters }, handleSubmitWord, handleSubmitGuess } = this

        return <div>
            {!word && <TextForm title="Enter a word" onSubmit={handleSubmitWord.bind(this)} />}
            {word && <div>
                {guessed}
                <TextForm title="Guess a character or the word" onSubmit={handleSubmitGuess.bind(this)} />
                <p>You have {MAX_ATTEMPS - attemps} tries.</p>
                <p>You guessed {letters} Letters from {word.length}.</p>
            </div>}
            {won && <div><p>you win!</p><button onClick={this.handleSubmitRefresh}>Restart the Game</button></div>}
            {lose && <div><p>you lose!</p><button onClick={this.handleSubmitRefresh}>Restart the Game</button></div>}
        </div>
    }
}

export default Game