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
import { useAuth } from "../../../hooks/useAuth";
import agentLoginStyles from "./AgentLoginStyles";

const AgentLogin = () => {
  const { login }: any = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (email === "agent" && password === "agent") {
      login({
        email,
        password,
        role: "agent",
      });
    } else if (email === "customer" && password === "customer") {
      login({
        email,
        password,
        role: "customer",
      });
    } else {
      setError(true);
    }
  };

  const handleUserNameChange = (event: any) => {
    setEmail(event?.target.value);
    setError(false);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value);
    setError(false);
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box sx={agentLoginStyles.root}>
        <Avatar sx={agentLoginStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={agentLoginStyles.form}>
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
            sx={agentLoginStyles.submitButton}
            onClick={handleSubmit}
            disabled={email.length === 0 || password.length === 0}
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

export default AgentLogin;
