import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import styled from 'styled-components'

const MoonIcon = styled(FaMoon)`
  color: black;
  justify-self: end;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  @media (min-width: 768px){
    font-size: 2rem;
  }
`
const SunIcon = styled(FaSun)`
  color: white;
  justify-self: end;
  margin-bottom: 2rem;
  cursor: pointer;
  font-size: 1.5rem;
  @media (min-width: 768px){
    font-size: 2rem;
  }
`

const Toggler = ({theme, themeToggler}) => {
    if (theme === 'dark') {
        return <SunIcon onClick={themeToggler} />
    } else {
        return <MoonIcon onClick={themeToggler} />
    }
}

export default Toggler
