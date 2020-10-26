import React from 'react'

const Movie = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>
        {props.hours}hr {props.minutes}min
      </p>
    </div>
  )
}

export default Movie //This allows our file to be imported

// function Movie(){

// }
