export {
  getAnswersList,
  getPercentageValue
}

function getPercentageValue (score, questions) {
  if (!questions) return 0
  return Math.round((score / questions) * 100)
}

function incorrectDict (value) {
  return {
    data: value,
    correct: false
  }
}

function getAnswersList (questionJson) {
  const correctAns = { data: questionJson.correct_answer, correct: true }
  const incorrectAnsList = questionJson.incorrect_answers
  const incorrectAns = incorrectAnsList.map(incorrectDict)
  return [correctAns, ...incorrectAns]
}
