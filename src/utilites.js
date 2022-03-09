function starRating(rating) {
  let stars = ""
  for (let i = 0; i < rating; i++) {
    stars += "★"
  }
  for (let i = 0; i < 10 - rating; i++) {
    stars += "☆"
  }
  return stars
}

export { starRating }
