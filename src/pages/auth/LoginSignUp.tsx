import { Box, Button, Checkbox, CssBaseline, Divider, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material';
import loginImg from '../../assets/login.png'
const LoginSignUp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#001831'


      }}>
      <CssBaseline />

      <Grid container>
        <Grid item md={2}></Grid>
        <Grid item md={8} sx={{ minHeight: '50vh', minWidth: '30vw', border: 1, borderRadius: '16px' }}>
          <Grid container>
            <Grid item md={6}
              sx={{
                height: 550,
                backgroundImage: `url(${loginImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                borderRadius: '16px 0 0 16px'
              }}
            >
            </Grid>
            <Grid item md={6}
              sx={{
                borderRadius: '0px 16px 16px 0px',
                backgroundColor:'#f5f5f5'
              }}
            >
              <Box>
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    pl:5,
                    pt:3,
                    pb:2
          

                  }}
                >
                  Login
                </Typography>
                <Divider />
               
                <Box component="form" noValidate  sx={{ m:5 }}>
              <TextField
                margin="normal"
                required
                fullWidth
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
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" sx={{
                }} />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 3,
                  mb: 2,
                  backgroundColor:'#001831',
                  '&:hover': {
                    background: "#00405f",
                  }
                }}
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
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>


      </Grid>
    </Box>
  )
}

export default LoginSignUp