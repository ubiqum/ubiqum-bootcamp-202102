import React from 'react'

function TextForm(props) {
    const { title, onSubmit } = props

    function handleSubmit(event) {
        event.preventDefault()

        const text = event.target.text.value

        onSubmit(text)
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="text">{title}</label>
        <input id="text" type="text" name="text" />
        <button>Submit</button>
    </form>
}

export default TextForm