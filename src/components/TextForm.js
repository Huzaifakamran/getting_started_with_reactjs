import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upper button clcked');
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleOnChange = (events) => {
        console.log('Upper button clcked')
        setText(events.target.value)
    }

    const [text, setText] = useState("Enter Your text here")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder={text} value={text} rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>
                    Upper Case
                </button>
            </div>
            <div className="container my-2">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
            </div>
        </>
    )
}
