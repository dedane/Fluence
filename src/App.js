
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Pages/Home'

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Red Rose',
        'cursive',
      ].join(',')
    }
  })
  return (
    <ThemeProvider theme={theme} >
      <Navbar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
