import { useLocation } from 'react-router-dom'
import useSWR from 'swr'
import { deckListParser } from './utils/deckListParser'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const DeckViewer = () => {
  console.log('DeckViewer')
  const location = useLocation()
  const { deckList } = location.state
  console.log('deckList', deckList)

  // set , 番号 , 枚数 , カード名 , image URL . apiURL
  const apiURLList = deckListParser(deckList)

  return (
    <div>
      <p>decklist</p>
      <p>{deckList}</p>
      {apiURLList.map((url) => {
        console.log('url', url)
        return <Card apiURL={url} />
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
      ? data['image_uris']['large']
      : data['card_faces'][0]['image_uris']['large']
  console.log('imageUrl', imageUrl)
  return (
    <div key={apiURL}>
      <p>Card Component</p>
      <p>{data['printed_name']}</p>
      <img src={imageUrl} />
    </div>
  )
}
