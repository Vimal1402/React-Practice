import React, { useContext } from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import { ThemeDataContext } from '../context/ThemeContext'

const Sections = () => {
  const data = useContext(ThemeDataContext)
  return (
    <div className='sections'>
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Sections
