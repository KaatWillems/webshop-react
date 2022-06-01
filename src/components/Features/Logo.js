import React from 'react'
import { Link } from 'react-router-dom'

function Logo(props) {
  return (
    <Link to="/home"> <div className={props.className}> </div></Link>
  )
}

export default Logo