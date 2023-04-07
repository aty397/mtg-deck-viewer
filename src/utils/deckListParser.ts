const API_URL = 'https://api.scryfall.com/cards/'

export const deckListParser = (deckListInput: string) => {
  console.log('deckListParser')
  // set , 番号 , 枚数 , カード名 , image URL
  const result = []
  const deckListArray = deckListInput.split('\n').filter((d) => {
    return d !== ''
  })
  console.log(deckListArray)

  for (const deckListEntry of deckListArray) {
    const set = deckListEntry.match(/\(([^)]+)\)/)
      ? deckListEntry.match(/\(([^)]+)\)/)[1].toLowerCase()
      : '' // セット名は小文字3文字
    const number = deckListEntry.split(' ').pop()
    // console.log(card)
    result.push(`${API_URL}${set}/${number}`) //TODO: 日本語表示対応は/jaを追加すればいいけど非対応のカードもあるのでやめとく
  }
  console.log('parser end')
  return result
}
