import { useLocation } from 'react-router-dom'
import { CanvasComponent } from './canvasComponent'
import './DeckViewer.css'
import { cardType } from './types'
import { useCard } from './useCard'
import { deckListParser } from './utils/deckListParser'
import { imageUrlFromCards } from './utils/imageUrlFromCards'

export const DeckViewer = () => {
  const location = useLocation()
  const { deckList } = location.state

  // [{apiURL}]
  const cardList: cardType[] = deckListParser(deckList)

  const { result, loading } = useCard(cardList)
  if (loading || result === undefined) return <div>loading...</div>

  return (
    <div className='DeckViewer'>
      <p>decklist</p>
      <p>{deckList}</p>
      <DeckVisualView cardList={result} />
      <CanvasComponent cardList={result} />
    </div>
  )
}

type DeckVisualViewProps = {
  cardList: any[]
}

const DeckVisualView = ({ cardList }: DeckVisualViewProps) => {
  return (
    <div className='DeckVisualBox'>
      {cardList.map((card) => {
        return <Card imageURL={imageUrlFromCards(card)} />
      })}
    </div>
  )
}

type CardProps = {
  imageURL: string
}
const Card = ({ imageURL }: CardProps) => {
  return (
    <>
      <img src={imageURL} />
    </>
  )
}
