export const imageUrlFromCards = (card: any) => {
  const imageUrl =
    'image_uris' in card
      ? card['image_uris']['small']
      : card['card_faces'][0]['image_uris']['small']
  return imageUrl
}
