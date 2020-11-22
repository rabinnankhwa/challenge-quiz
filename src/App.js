import React from 'react'
import QuizItem from './QuizItem'
import './App.css'

import questions from './questions'

class App extends React.Component {
  constructor () {
    super()
    this.state = { questionIndex: 0 }
  }

  handleNext () {
    this.setState({ questionIndex: this.state.questionIndex + 1 })
  }

  render () {
    return (<div className='App'>
      <div>Question {this.state.questionIndex + 1} of {questions.length}</div>
      <QuizItem
        questionJson={questions[this.state.questionIndex]}
        handleNext={() => this.handleNext()}
      />
    </div>)
  }
}

export default App
