import React from 'react'

function Header(props) {
  return (
    <div><h1 className='text-light text-center py-4 animate__animated animate__bounce'>{props.title}</h1></div>
  )
}

export default Header