import React from 'react'
import loader from '../image/Eclipse-1s-200px.svg'

export default function Loader() {
  return (
    <div style={{ paddingTop: '25px' }}>
      <div>Loading...</div>
      <img style={{ width: '80px' }} src={loader} alt='img'></img>
    </div>
  )
}
