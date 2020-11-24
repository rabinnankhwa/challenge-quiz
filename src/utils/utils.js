export {
  getButtonClass,
  shuffleAnswers,
  orderBooleanAnswers,
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

function shuffleAnswers (answers, order) {
  const answerObjects = { ...answers }
  const orderedAnswers = order.map(i => answerObjects[i])
  return orderedAnswers.filter(Boolean)
}

function orderBooleanAnswers (answers) {
  const compare = (a, b) => { return a.data === 'True' ? -1 : 1 }
  return answers.sort(compare)
}

function getButtonClass (completed, correct, clicked) {
  if (!completed) return ''
  if (correct) return 'button-correct'
  if (clicked) return 'button-incorrect'
  return ''
}
