import useSWR from 'swr'
import { cardType } from './types'
const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useCard = (cardList: cardType[]) => {
  const fetchData = async () => {
    try {
      const cards = await Promise.all(
        cardList.map((card) => fetcher(card.apiUrl))
      )
      return { cards }
    } catch (error) {
      return { error }
    }
  }

  const { data, error } = useSWR(cardList, fetchData)

  const result = data?.cards

  const loading = !data && !error

  return { result, loading, error }
}
