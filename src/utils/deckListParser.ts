import { cardType } from './../types'
const API_URL = 'https://api.scryfall.com/cards/'

// output
// 同じカードでも枚数分だけ返してくれる
/**
 * [
 * { apiUrl: 'https://api.scryfall.com/cards/eld/1' },
 * { apiUrl: 'https://api.scryfall.com/cards/eld/1' },
 * ]
 *  */
export const deckListParser = (deckListInput: string): cardType[] => {
  console.log('deckListParser')
  // set , 番号 , 枚数 , カード名 , image URL
  const result = []
  const deckListArray = deckListInput.split('\n').filter((d) => {
    return d !== ''
  })
  console.log(deckListArray)

  for (const deckListEntry of deckListArray) {
    // 正規表現でセット名を抽出
    // match() が null を返した場合は、if 文が実行されません。
    const setMatchResult = deckListEntry.match(/\(([^)]+)\)/)
    if (!setMatchResult) continue
    const set = setMatchResult[1].toLowerCase() // セット名は()の中身の小文字3文字
    const number = deckListEntry.split(' ').pop() // 番号は最後の要素
    const cardEntry = {
      apiUrl: `${API_URL}${set}/${number}`,
    }
    // 枚数の回数だけ繰り返す
    const numbers = parseInt(deckListEntry.split(' ')[0]) // 枚数は最初の要素
    for (let i = 0; i < numbers; i++) {
      result.push(cardEntry) //TODO: 日本語表示対応は/jaを追加すればいいけど非対応のカードもあるのでやめとく
    }
  }
  console.log('parser end', result)
  return result // 一枚ごとに返してくれた方が都合が良さそう
}
