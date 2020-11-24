import React from 'react'
import QuizItem from '../quiz-item/quiz-item'
import './app.css'

import allQuestions from '../../questions'
import { getPercentageValue } from '../../utils/utils'

function getQuestions () {
  return allQuestions
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dataLoaded: false,
      currentCompleted: false,
      correctCount: 0,
      questionIndex: 0
    }
    this.questions = []
  }

  componentDidMount () {
    this.questions = getQuestions()
    this.setState({ dataLoaded: true })
  }

  handleAnswer (value) {
    this.setState({
      correctCount: this.state.correctCount + value.correct,
      currentCompleted: true
    })
  }

  handleNext () {
    this.setState({
      questionIndex: this.state.questionIndex + 1,
      currentCompleted: false
    })
  }

  render () {
    const {
      dataLoaded,
      correctCount,
      currentCompleted,
      questionIndex
    } = this.state
    if (!dataLoaded) return (<div>Loading...</div>)

    const { questions } = this
    if (questionIndex >= questions.length) return (<div>Quiz Completed!</div>)

    const actualScore = correctCount
    const completed = questionIndex + currentCompleted
    const incorrectAnswers = completed - actualScore
    const maximumScore = questions.length - incorrectAnswers

    const completedPercent = getPercentageValue(completed, questions.length)
    const minPossibleScore = getPercentageValue(actualScore, questions.length)
    const probableScore = getPercentageValue(actualScore, completed)
    const maxPossibleScore = getPercentageValue(maximumScore, questions.length)

    return (<div className='App'>
      <div className='upper-progress-bar'>
        <div style={{ width: completedPercent + '%' }} />
      </div>
      <div className='question-body'>
        <div className='question-number'>
          Question {questionIndex + 1} of {questions.length}
        </div>
        <QuizItem
          questionJson={questions[questionIndex]}
          handleNext={() => this.handleNext()}
          handleAnswer={(value) => this.handleAnswer(value)}
        />
        <div style={{ display: 'flex', marginTop: 'auto' }}>
          <div>Score: {minPossibleScore}%</div>
          <div style={{ marginLeft: 'auto' }}>
            Max Score: {maxPossibleScore}%
          </div>
        </div>
        <div className='lower-progress-bar'>
          <div
            className='min-score'
            style={{ width: minPossibleScore + '%' }}
          />
          <div
            className='prob-score'
            style={{ width: (probableScore - minPossibleScore) + '%' }}
          />
          <div
            className='max-score'
            style={{ width: (maxPossibleScore - probableScore) + '%' }}
          />
        </div>
      </div>
    </div>)
  }
}

export default App
