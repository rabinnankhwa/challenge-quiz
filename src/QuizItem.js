import React from 'react'
import StarRatings from 'react-star-ratings'

import './QuizItem.css'

const RATING_MAP = {
  easy: 1,
  medium: 2,
  hard: 3
}

class QuizItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      completed: false,
      correct: false
    }
  }

  handleAnswerClick (correctValue) {
    if (correctValue) this.props.handleCorrect()
    this.setState({ completed: true, correct: correctValue })
  }

  render () {
    const { questionJson } = this.props
    const category = decodeURIComponent(questionJson.category)
    const question = decodeURIComponent(questionJson.question)
    const correctAns = decodeURIComponent(questionJson.correct_answer)
    const answers = questionJson.incorrect_answers.map(ans => decodeURIComponent(ans))
    return (
      <>
        <div className='category'>{category}</div>
        <StarRatings
          rating={RATING_MAP[questionJson.difficulty]}
          starDimension='10px'
          starRatedColor='black'
          starSpacing='1px'
        />
        <div>{question}</div>
        <button onClick={() => this.handleAnswerClick(true)}>{correctAns}</button>
        <button onClick={() => this.handleAnswerClick(false)}>{answers[0]}</button>
        <button onClick={() => this.handleAnswerClick(false)}>{answers[1]}</button>
        <button onClick={() => this.handleAnswerClick(false)}>{answers[2]}</button>
        <div>
          {this.state.completed && this.state.correct && <b>Correct!</b>}
          {this.state.completed && !this.state.correct && <b>Sorry!</b>}
        </div>
        <div>
          {this.state.completed &&
            <button onClick={() => { this.props.handleNext(); this.setState({ completed: false }) }} >
              Next Question
            </button>
          }
        </div>
      </>
    )
  }
}

export default QuizItem
