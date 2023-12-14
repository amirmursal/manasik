import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuth } from "../../hooks/useAuth";
import loginStyles from "./LoginStyles";
import { useLoginMutation } from "../../services/login";
import { setUser } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const { login: hookLogin }: any = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const { data, error: apiError }: any = await login({
      username: email,
      password,
    });

    if (!apiError) {
      hookLogin(data);
      dispatch(setUser(data));
    }
    setError(true);
    setIsLoading(false);
  };

  const handleUserNameChange = (event: any) => {
    setEmail(event?.target.value.trim());
    setError(false);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value.trim());
    setError(false);
  };

  console.log(isLoading);
  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box sx={loginStyles.root}>
        <Avatar sx={loginStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={loginStyles.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            value={email}
            onChange={handleUserNameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {error && (
            <Typography color="error">Please enter valid credential</Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={loginStyles.submitButton}
            onClick={handleSubmit}
            disabled={email.length === 0 || password.length === 0}
            startIcon={isLoading && <CircularProgress />}
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
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
