import React from 'react'
import QuizItem from './QuizItem'
import './App.css'

import questions from './questions'
import { getPercentageValue } from './utils'

class App extends React.Component {
  constructor () {
    super()
    this.state = { questionIndex: 0 }
  }

  handleNext () {
    this.setState({ questionIndex: this.state.questionIndex + 1 })
  }

  render () {
    const {
      questionIndex
    } = this.state

    return (<div className='App'>
      <div className='upper-progress-bar'>
        <div style={{ width: getPercentageValue(questionIndex, questions.length) + '%' }} />
      </div>
      <div>Question {questionIndex + 1} of {questions.length}</div>
      <QuizItem
        questionJson={questions[questionIndex]}
        handleNext={() => this.handleNext()}
      />
    </div>)
  }
}

export default App
