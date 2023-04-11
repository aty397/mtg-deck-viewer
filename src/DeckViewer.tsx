import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import { CanvasComponent } from './canvasComponent'
import './DeckViewer.css'
import { cardType } from './types'
import { deckListParser } from './utils/deckListParser'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const DeckViewer = () => {
  console.log('DeckViewer')
  const location = useLocation()
  const { deckList } = location.state

  // [{apiURL}]
  const cardList: cardType[] = deckListParser(deckList)

  return (
    <div className='DeckViewer'>
      <p>decklist</p>
      <p>{deckList}</p>
      <DeckVisualView cardList={cardList} />
      <CanvasComponent />
    </div>
  )
}

type DeckVisualViewProps = {
  cardList: cardType[]
}

const DeckVisualView = ({ cardList }: DeckVisualViewProps) => {
  return (
    <div className='DeckVisualBox'>
      {cardList.map((card) => {
        return <Card apiURL={card['apiUrl']} />
      })}
    </div>
  )
}

type CardProps = {
  apiURL: string
}
const Card = ({ apiURL }: CardProps) => {
  const { data, error } = useSWR(apiURL, fetcher)
  console.log('apiURL', apiURL)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  if (data['object'] === 'error') return <div>error</div>

  // 両面カードの場合データ構造が異なのので場合分けする
  const imageUrl =
    'image_uris' in data
      ? data['image_uris']['small']
      : data['card_faces'][0]['image_uris']['small']
  console.log('imageUrl', imageUrl)
  return (
    <>
      <img src={imageUrl} />
    </>
  )
}
