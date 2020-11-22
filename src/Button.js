import React from 'react'

import './Button.css'

class Button extends React.Component {
  render () {
    const { value, handleAnswerClick } = this.props
    const buttonText = decodeURIComponent(value.data)
    return (
      <div className='button-wrapper'>
        <button
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
