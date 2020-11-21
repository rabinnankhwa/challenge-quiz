import React from 'react'
import QuizItem from './QuizItem'
import './App.css'

import questions from './questions'

class App extends React.Component {
  render () {
    return (<div className='App'>
      <div>Question 16 of 20</div>
      <QuizItem
        questionJson={questions[0]}
      />
    </div>)
  }
}

export default App
