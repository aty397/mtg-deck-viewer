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
    // 正規表現でセット名を抽出します。
    // match() が null を返した場合は、if 文が実行されません。
    const setMatchResult = deckListEntry.match(/\(([^)]+)\)/)
    if (!setMatchResult) continue
    const set = setMatchResult[1].toLowerCase() // セット名は()の中身の小文字3文字
    const number = deckListEntry.split(' ').pop()
    const cardEntry = {
      numbers: Number(deckListEntry.split(' ')[0]),
      apiUrl: `${API_URL}${set}/${number}`,
    }
    result.push(cardEntry) //TODO: 日本語表示対応は/jaを追加すればいいけど非対応のカードもあるのでやめとく
  }
  console.log('parser end', result)
  return result
}
