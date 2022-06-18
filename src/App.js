import React, { useEffect, useState } from 'react'
import useDarkMode from './components/useDarkMode'
import { darkMode, lightMode } from "./components/Theme";
import Toggler from './components/Toggler'
import CardList from './components/CardList'
import dummyData from './data'
import GlobalStyles from './GlobalStyles'
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.section`
  max-width: 1024px;
  width: 90vw;
  margin: 20px auto;
  display: grid;
`
export default function App() {
  const [videos, setVideos] = useState([])
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'dark' ? darkMode : lightMode

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData)
    }, 400)
    return () => clearTimeout(timer)
  }, [])
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles/>
      <Container>
        <Toggler theme={theme} themeToggler={themeToggler} />
        {
          videos.map((video, idx) => <CardList video={video} key={idx}/>)
        }
      </Container>
    </ThemeProvider>
  )
}
