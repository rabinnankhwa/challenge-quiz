import React from 'react'
import QuizItem from './QuizItem'
import './App.css'

import allQuestions from './questions'
import { getPercentageValue } from './utils'

function getQuestions () {
  return allQuestions
}

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      dataLoaded: false,
      correctCount: 0,
      questionIndex: 0
    }
    this.questions = []
  }

  componentDidMount () {
    this.questions = getQuestions()
    this.setState({ dataLoaded: true })
  }

  handleCorrect () {
    this.setState({ correctCount: this.state.correctCount + 1 })
  }

  handleNext () {
    this.setState({ questionIndex: this.state.questionIndex + 1 })
  }

  render () {
    const {
      dataLoaded,
      correctCount,
      questionIndex
    } = this.state
    if (!dataLoaded) return (<div>Loading...</div>)

    const { questions } = this

    const actualScore = correctCount
    const completed = questionIndex + 1
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
          handleCorrect={() => this.handleCorrect()}
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
