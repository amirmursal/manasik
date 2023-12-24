import { useMemo, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import signUpStyles from "./SignUpStyles";
import {
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  const handleUserNameChange = (event: any) => {
    setUsername(event?.target.value.trim());
  };
  const handleEmailChange = (event: any) => {
    setEmail(event?.target.value.trim());
  };
  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event?.target.value.trim());
    if (password === event?.target.value.trim()) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event?.target.value.trim());
    setConfirmPassword("");
  };

  const handleUserRoleChange = (event: any) => {
    setUserRole(event.target.value);
  };

  const isDisabled = useMemo(
    () =>
      isLoading ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0 ||
      username.length === 0 ||
      userRole.length === 0,
    [isLoading, email, password, confirmPassword, username, userRole]
  );

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box sx={signUpStyles.root}>
        <Avatar sx={signUpStyles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate sx={signUpStyles.form}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={username}
            onChange={handleUserNameChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={handleEmailChange}
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
          <TextField
            error={confirmPasswordError}
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            helperText={confirmPasswordError && "password does not match"}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Register as
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={userRole}
              onChange={handleUserRoleChange}
            >
              <FormControlLabel
                value="customer"
                control={<Radio />}
                label="Customer"
              />
              <FormControlLabel
                value="agent"
                control={<Radio />}
                label="Travel Partner"
              />
            </RadioGroup>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={signUpStyles.submitButton}
            onClick={handleSubmit}
            disabled={isDisabled}
            startIcon={isLoading && <CircularProgress />}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
