
import React from 'react'
import ReactDOM from 'react-dom'
import Restart from './restart'

it('renders without crashing', () => { // eslint-disable-line
  const div = document.createElement('div')
  const props = { }
  ReactDOM.render(<Restart {...props} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
