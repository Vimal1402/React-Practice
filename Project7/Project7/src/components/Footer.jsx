import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Footer = () => {
  const [theme, setTheme] = useContext(ThemeDataContext)
  return (
    <div className='footer'>
      <h3>{theme}</h3>
      <button onClick={()=>{
        if(theme == 'light'){
          setTheme('Dark')
        }else{
          setTheme('light')
        }
      }}>Change theme</button>
    </div>
  )
}

export default Footer
