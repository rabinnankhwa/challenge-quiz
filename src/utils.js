export {
  getPercentageValue
}

function getPercentageValue (score, questions) {
  if (!questions) return 0
  return Math.round((score / questions) * 100)
}
