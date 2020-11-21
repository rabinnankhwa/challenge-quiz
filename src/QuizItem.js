import React from 'react'

class QuizItem extends React.Component {
  render () {
    const { questionJson } = this.props
    const question = decodeURIComponent(questionJson.question)
    const correctAns = decodeURIComponent(questionJson.correct_answer)
    const answers = questionJson.incorrect_answers.map(ans => decodeURIComponent(ans))
    return (
      <>
        <div>Entertainment: Board Games</div>
        <div>{question}</div>
        <button>{correctAns}</button>
        <button>{answers[0]}</button>
        <button>{answers[1]}</button>
        <button>{answers[2]}</button>
      </>
    )
  }
}

export default QuizItem
