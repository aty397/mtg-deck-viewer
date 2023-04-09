import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import { CanvasComponent } from './canvasComponent'
import './DeckViewer.css'
import { deckListParser } from './utils/deckListParser'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const DeckViewer = () => {
  console.log('DeckViewer')
  const location = useLocation()
  const { deckList } = location.state
  console.log('deckList', deckList)

  // [{枚数 , apiURL}]
  const cardEntryArray = deckListParser(deckList)

  return (
    <div className='DeckViewer'>
      <p>decklist</p>
      <p>{deckList}</p>
      <DeckVisualView deckList={deckList} />
      <CanvasComponent />
    </div>
  )
}

type DeckVisualViewProps = {
  deckList: string
}

const DeckVisualView = ({ deckList }: DeckVisualViewProps) => {
  console.log('deckList', deckList)
  // [{枚数 , apiURL}]
  const cardEntryArray = deckListParser(deckList)
  console.log('deckList', deckList)
  return (
    <div className='DeckVisualBox'>
      {cardEntryArray.map((card) => {
        console.log('url', card['apiUrl'], 'numbers', card['numbers'])
        const cards = []
        // card['numbers']枚分のカードを表示する
        for (let i = 0; i < card['numbers']; i++) {
          cards.push(<Card apiURL={card['apiUrl']} />)
        }
        return cards
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
