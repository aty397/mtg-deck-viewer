import { useEffect } from 'react'
import './canvas.css'
const testImageList = [
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',

  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
  'https://cards.scryfall.io/small/front/9/e/9ed7441f-f624-49c8-8611-d9bba0e441ac.jpg?1675957278',
]

const firstPosition = [10, 50]
type CanvasComponentProps = {
  imageList?: string[]
  deckName?: string
}

const cardWidth = 146
const cardHeight = 204

export const CanvasComponent = ({
  imageList,
  deckName,
}: CanvasComponentProps) => {
  const download = (data, filename) => {
    const a = document.createElement('a')
    a.href = data
    a.download = filename
    document.body.appendChild(a)
    a.click()
  }

  const saveImage = () => {
    const canvas = document.getElementById('deckListCanvas')
    const dataURL = canvas.toDataURL('image/png')
    download(dataURL, 'canvas.png')
  }

  useEffect(() => {
    const canvas = document.getElementById('deckListCanvas')
    const ctx = canvas.getContext('2d')

    // Draw text on the canvas
    ctx.font = '30px Arial'
    ctx.fillText('Esper Legends', 10, 30)

    testImageList.forEach((image, index) => {
      const img = new Image()
      img.src = image
      img.crossOrigin = 'anonymous' // CORS対策
      img.onload = () => {
        ctx.drawImage(
          img,
          firstPosition[0] + cardWidth * (index % 6),
          firstPosition[1] + cardHeight * Math.floor(index / 7)
        )
      }
    })
  }, [])

  return (
    <div>
      <canvas id='deckListCanvas' width='1000' height='2500'></canvas>
      <button onClick={saveImage}>Save Image</button>
    </div>
  )
}
