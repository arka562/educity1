import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div class='title'>
      <p>{props.subTitle}</p>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Title
