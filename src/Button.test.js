
import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { completed: false, value: { data: 'True' } }
  ReactDOM.render(<Button {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
