import React from 'react'
import StarRatings from 'react-star-ratings'
import shuffle from 'lodash/shuffle'

import './QuizItem.css'
import Button from './Button'

import {
  shuffleAnswers,
  orderBooleanAnswers,
  getAnswersList
} from './utils'

const RATING_MAP = {
  easy: 1,
  medium: 2,
  hard: 3
}

class QuizItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      answerOrder: shuffle([0, 1, 2, 3]),
      completed: false,
      correct: false
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.questionJson !== this.props.questionJson) {
      this.setState({ answerOrder: shuffle([0, 1, 2, 3]) })
    }
  }

  handleAnswerClick (value) {
    if (value.correct) this.props.handleCorrect()
    this.setState({ completed: true, correct: value.correct })
  }

  render () {
    const { questionJson } = this.props
    const { type } = questionJson
    const category = decodeURIComponent(questionJson.category)
    const question = decodeURIComponent(questionJson.question)
    const answersList = getAnswersList(questionJson)
    return (
      <>
        <div className='category'>{category}</div>
        <StarRatings
          rating={RATING_MAP[questionJson.difficulty]}
          starDimension='10px'
          starRatedColor='black'
          starSpacing='1px'
        />
        <div className='question'>{question}</div>
        <div className='button-flex'>
          { type === 'multiple' &&
            shuffleAnswers(answersList, this.state.answerOrder).map((value) => (
              <Button
                key={value.data}
                value={value}
                handleAnswerClick={(value) => this.handleAnswerClick(value)}
              />
            ))}
          { type === 'boolean' &&
            orderBooleanAnswers(answersList).map((value) => (
              <Button
                key={value.data}
                value={value}
                handleAnswerClick={(value) => this.handleAnswerClick(value)}
              />
            ))}
        </div>
        <div className='result-message'>
          {this.state.completed && this.state.correct && <b>Correct!</b>}
          {this.state.completed && !this.state.correct && <b>Sorry!</b>}
        </div>
        <div className='next-question'>
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
