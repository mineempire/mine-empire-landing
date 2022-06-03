import { ThemeProvider } from 'styled-components'
import LandingHeader from './components/LandingHeader'
import Body from './components/Body'

const theme = {
  colors: {
    header: '#11182780',
    body: '#171b2d',
    footer: '#003333',
  },
  button: {
    bg: 'linear-gradient(180deg, rgb(223.12, 66.01, 66.01) 0%, rgb(153, 41, 198) 100%)',
  },
  text: {
    color: '#fff',
    fontFamily: '"Montserrat", Halvetica',
    size: {
      s: '12px',
      m: '14px',
      l: '16px',
      xl: '18px',
      xxl: '20px',
      xxx: '24px'
    }
  },
  mobile: '768px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <LandingHeader />
      </>
      <>
        <Body />
      </>
    </ThemeProvider>
  )
}

export default App