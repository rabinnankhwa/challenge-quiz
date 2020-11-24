import React from 'react'
import Button from '../button/button'
import './restart.css'

function Restart (props) {
  return (
    <div className='center-screen'>
      <div>Your score is: {props.score} %</div>
      <div>Would you like to restart the quiz?</div>
      <Button
        data={'Restart'}
        completed={false}
        handleAnswerClick={props.handleRestart}
      />
    </div>
  )
}

export default Restart
