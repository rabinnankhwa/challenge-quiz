import React from 'react'

import './Button.css'

class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false
    }
  }

  handleButtonClick () {
    this.setState({ clicked: true })
    this.props.handleAnswerClick(this.props.value)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.value.data !== this.props.value.data) {
      this.setState({ clicked: false })
    }
  }

  render () {
    const { value, completed } = this.props
    const { clicked } = this.state
    const buttonText = decodeURIComponent(value.data)
    return (
      <div className='button-wrapper'>
        <button
          disabled={completed}
          className={`button ${clicked ? 'button-incorrect' : ''}`}
          onClick={() => this.handleButtonClick(value)}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Button
