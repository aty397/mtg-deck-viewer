import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const DECKLIST_PLACEHOLDER = `
Deck
3 Skrelv, Defector Mite (ONE) 33
4 Dennick, Pious Apprentice (MID) 217
4 Thalia, Guardian of Thraben (DKA) 24
4 Adeline, Resplendent Cathar (MID) 1
4 Raffine, Scheming Seer (SNC) 213
3 Toluz, Clever Conductor (SNC) 228
2 Ertai Resurrected (DMU) 199
2 Sheoldred, the Apocalypse (DMU) 107
2 Ao, the Dawn Sky (NEO) 2
2 Go for the Throat (BRO) 102
4 Darkslick Shores (ONE) 250
4 Eiganjo, Seat of the Empire (NEO) 268
3 Otawara, Soaring City (NEO) 271
4 Plaza of Heroes (DMU) 252
4 Raffine's Tower (SNC) 254
4 Seachrome Coast (ONE) 258
4 Shattered Sanctum (VOW) 264
2 The Raven Man (DMU) 103
1 Anointed Peacekeeper (DMU) 2

Sideboard
3 Loran of the Third Path (BRO) 12
4 Cut Down (DMU) 89
2 Make Disappear (SNC) 49
1 Unlicensed Hearse (SNC) 246
3 Wedding Announcement (VOW) 45
2 Spell Pierce (NEO) 80
`
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
