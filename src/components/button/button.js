import React from 'react'

import './button.css'

import { getButtonClass } from '../../utils/utils'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleButtonClick () {
    this.setState({ clicked: true })
    this.props.handleAnswerClick(this.props.correct)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ clicked: false })
    }
  }

  render () {
    const { data, correct, completed } = this.props
    const { clicked } = this.state
    const buttonText = decodeURIComponent(data)
    const buttonClass = getButtonClass(completed, correct, clicked)
    return (
      <div className='button-wrapper'>
        <button
          disabled={completed}
          className={`button ${buttonClass}`}
          data-cy={correct ? 'correct' : 'incorrect'}
          onClick={() => this.handleButtonClick()}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Button
