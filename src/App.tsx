import { Route, Routes } from 'react-router-dom'
import { DeckViewer } from './DeckViewer'
import { Home } from './Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/decklist' element={<DeckViewer />} />
    </Routes>
  )
}

export default App
