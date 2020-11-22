import React from 'react'

import './Button.css'

class Button extends React.Component {
  render () {
    const { value, completed, handleAnswerClick } = this.props
    const buttonText = decodeURIComponent(value.data)
    return (
      <div className='button-wrapper'>
        <button
          disabled={completed}
          className='button'
          onClick={() => handleAnswerClick(value)}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Button
