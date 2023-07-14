import React from 'react'
import './firstLetter.css'

const FirstLetter = (props) => {

    const { letterIndex } = props

    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let num = 0

    return (
        <>
            {
                letters.map((item) => {
                    return (
                        <div className='indexLetters' key={num++} onClick={() => letterIndex(item)}>
                            <h2>{item}</h2>
                        </div>
                    )
                })
            }
        </>
    )
}

export default FirstLetter
