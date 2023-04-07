import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { DECKLIST_PLACEHOLDER } from './constants'

export const Home = () => {
  const textAreaRef = useRef(null)
  const [textAreaValue, setTextAreaValue] = useState(DECKLIST_PLACEHOLDER)

  const handleChange = () => {
    const newValue = textAreaRef.current.value
    setTextAreaValue(newValue)
    console.log(newValue)
  }
  return (
    <div className='App'>
      <h1>MTG Deck Viewer</h1>
      <textarea
        className='DecklistTextArea'
        placeholder={DECKLIST_PLACEHOLDER}
        ref={textAreaRef}
        value={textAreaValue}
        onChange={() => handleChange()}
      />
      <Link to='/decklist' state={{ deckList: textAreaValue }}>
        <button>Submit</button>
      </Link>
    </div>
  )
}
