import React from 'react'
import burgerLogo from './burgerLogo.png'

export const Logo = () => {
  let logoStyle = {
    backgroundColor: '#fff',
    padding: '8px',
    height: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
  }
  let burgerStyle = {
    height: '30px'
  }
  return (
    <div className="logoDesign" style={logoStyle}>
      <img src={burgerLogo} alt="" style={burgerStyle} />
    </div>
  )
}
