
import Navbar from './Components/Navbar'
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <ThemeProvider theme={theme} className="App">
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
