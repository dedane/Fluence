import  React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";

const defaultTheme = createTheme();

export default function BrandSignIn () {
    
          const navigate = useNavigate();
         const [email, setEmail] = useState("");
         const [password,setPassword] = useState("");

         const auth = getAuth();
        const signInBrand = (event) => {

          
          event.preventDefault();
          signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate('/BrandLanding')
            // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        };
  return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://ik.imagekit.io/ugyodiq15/istockphoto-1181089973-612x612_2_GYE6FYNbx.png?updatedAt=1689709911183)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover ',
          backgroundPosition: 'center',
        }}
      >
          
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 18,
            mx: 8,
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
         <Box justify='start' align='start'>
            <Typography component="h1" variant="h5">
              Welcome
            </Typography>
            <Typography component="h1" variant="h5">
              Create a new account
            </Typography>
          </Box>
          <Box component="form" noValidate onSubmit={signInBrand} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Typography href="#" variant="body2" component={Link} to='/BrandSignUp'>
                 SignUp
                </Typography>
              </Grid>
            </Grid>
            
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  )
}
