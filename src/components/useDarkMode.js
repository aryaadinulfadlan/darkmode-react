import { useEffect, useState } from 'react'

const useDarkMode = () => {
    const [theme, setTheme] = useState('dark')
    
    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }
    const themeToggler = () => {
        theme === 'dark' ? setMode('light') : setMode('dark')
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme ? setTheme(localTheme) : setMode('dark')
    }, [])
    return [theme, themeToggler]
}

export default useDarkMode
