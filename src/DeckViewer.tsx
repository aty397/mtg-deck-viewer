import { useLocation } from 'react-router-dom'
export const DeckViewer = () => {
  const location = useLocation()
  const { deckList } = location.state
  return <div>DeckViewer: {deckList}</div>
}
