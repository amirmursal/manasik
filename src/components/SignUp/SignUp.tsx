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
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useSignUpMutation } from "../../services/signup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const { data }: any = await signUp({
      username,
      email,
      password,
      confirmPassword,
      roleId: userRole,
      firstname: firstName,
      lastname: lastName,
    });
    if (data.isError) {
      setError(true);
      setIsLoading(false);
      setEmail("");
      setPassword("");
      setUsername("");
      setConfirmPassword("");
      setUserRole("");
      setFirstName("");
      setLastName("");
      setConfirmPasswordError(false);
    } else {
      setIsLoading(false);
      navigate("/login", { replace: true });
    }
  };

  const handleUserNameChange = (event: any) => {
    setError(false);
    setUsername(event?.target.value.trim());
  };

  const handleEmailChange = (event: any) => {
    const isError = validateEmail(event?.target.value);
    setEmailError(!isError);
    setError(false);
    setEmail(event?.target.value.trim());
  };

  const validateEmail = (email: any) => {
    // Regular expression for a basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    return emailRegex.test(email);
  };

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value.trim());
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value.trim());
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
      userRole.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0,
    [
      isLoading,
      email,
      password,
      confirmPassword,
      username,
      userRole,
      firstName,
      lastName,
    ]
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
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="firstName"
              label="First Name"
              id="firstName"
              value={firstName}
              autoFocus
              onChange={handleFirstNameChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="lastName"
              label="Last Name"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </Grid>
          <Grid item xs={12}>
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
            {emailError && (
              <Typography color="error">input valid email address</Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={username}
              onChange={handleUserNameChange}
            />
            {error && (
              <Typography color="error">User already exists</Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12} sm={6}>
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
          </Grid>
          <Grid item xs={12}>
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
                  value="3"
                  control={<Radio />}
                  label="Customer"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Travel Partner"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignUp;
