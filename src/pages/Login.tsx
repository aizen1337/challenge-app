import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography'
import GoogleIcon from '@mui/icons-material/Google';
import { useUser } from '../context/useUser';
export default function Login() {
  const {signupWithGoogle} = useUser()
  return (
      <Grid container component="main" sx={{ height: '100vh', width: '100vw', margin: 0}}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h3" sx={{m:5}}>
              YourOwnChallenge
            </Typography>
            <Avatar sx={{ m: 1, bgcolor: 'error.dark' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button
                type="button"
                onClick={() => signupWithGoogle()}
                fullWidth
                variant="outlined"
                color="error"
                endIcon={<GoogleIcon/>}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In with google
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}