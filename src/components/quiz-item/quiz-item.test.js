import React from 'react'
import ReactDOM from 'react-dom'
import QuizItem from './quiz-item'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const mockQuestion = {
    category: 'Entertainment%3A%20Books',
    type: 'multiple',
    difficulty: 'hard',
    question: 'What%20is%20Ron%20Weasley%27s%20middle%20name%3F',
    correct_answer: 'Bilius',
    incorrect_answers: [
      'Arthur',
      'John',
      'Dominic'
    ]
  }
  const props = { questionJson: mockQuestion }
  ReactDOM.render(<QuizItem {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
