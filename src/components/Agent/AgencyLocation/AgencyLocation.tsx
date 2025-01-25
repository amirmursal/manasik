import React, { ChangeEvent, useCallback, useMemo, useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Container,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { useAddAgencyLocationMutation } from "../../../services/agency";

const AgencyLocation = () => {
  const [branchName, setBranchName] = useState<string>("");
  const [branchContactNumber, setBranchContactNumber] = useState<string>("");
  const [branchEmail, setBranchEmail] = useState<string>("");
  const [branchAddress, setBranchAddress] = useState<string>("");
  const [branchCity, setBranchCity] = useState<string>("");
  const [branchState, setBranchState] = useState<string>("");
  const [branchCountry, setBranchCountry] = useState<string>("");
  const [branchPincode, setBranchPincode] = useState<string>("");
  const [addAgencyLocation] = useAddAgencyLocationMutation();
  const [showMessageBar, setShowMessageBar] = useState<boolean>(false);

  const reset = useCallback(() => {
    setBranchName("");
    setBranchContactNumber("");
    setBranchEmail("");
    setBranchAddress("");
    setBranchCity("");
    setBranchState("");
    setBranchCountry("");
    setBranchPincode("");
  }, []);

  const handleSubmit = useCallback(async () => {
    const branchLocation = {
      branchName,
      contactNum: branchContactNumber,
      emailId: branchEmail,
      address: branchAddress,
      city: branchCity,
      state: branchState,
      country: branchCountry,
      pinCode: branchPincode,
    };
    const { data }: any = await addAgencyLocation({
      location: branchLocation,
      agencyId: 1,
    });

    if (data) {
      setShowMessageBar(true);
      reset();
    }
  }, [
    addAgencyLocation,
    branchAddress,
    branchCity,
    branchContactNumber,
    branchCountry,
    branchEmail,
    branchName,
    branchPincode,
    branchState,
    reset,
  ]);

  const handleBranchNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchName(event.target.value);
    },
    []
  );

  const handleBranchContactNumberChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchContactNumber(event.target.value);
    },
    []
  );

  const handleBranchEmailChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchEmail(event.target.value);
    },
    []
  );

  const handleBranchAddressChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchAddress(event.target.value);
    },
    []
  );

  const handleBranchCityChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchCity(event.target.value);
    },
    []
  );

  const handleBranchStateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchState(event.target.value);
    },
    []
  );

  const handleBranchCountryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchCountry(event.target.value);
    },
    []
  );
  const handleBranchPinCodeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBranchPincode(event.target.value);
    },
    []
  );

  const handleClose = useCallback(() => {
    setShowMessageBar(false);
  }, []);

  const isDisable = useMemo(
    () =>
      !branchName ||
      !branchContactNumber ||
      !branchEmail ||
      !branchAddress ||
      !branchCity ||
      !branchState ||
      !branchCountry ||
      !branchPincode,
    [
      branchAddress,
      branchCity,
      branchContactNumber,
      branchCountry,
      branchEmail,
      branchName,
      branchPincode,
      branchState,
    ]
  );

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Agency Location
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={handleBranchNameChange}
              required
              id="branchName"
              name="branchName"
              label="Branch Name"
              fullWidth
              value={branchName}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleBranchContactNumberChange}
              id="branchContact"
              name="branchContact"
              label="Agency Contact"
              fullWidth
              value={branchContactNumber}
              type="number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleBranchEmailChange}
              value={branchEmail}
              id="branchEmail"
              name="branchEmail"
              label="Email"
              fullWidth
              type="email"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              onChange={handleBranchAddressChange}
              value={branchAddress}
              id="branchAddress"
              name="branchAddress"
              label="Branch Address"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleBranchCityChange}
              value={branchCity}
              id="branchCity"
              name="branchCity"
              label="City"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleBranchStateChange}
              value={branchState}
              id="branchState"
              name="branchState"
              label="State"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleBranchCountryChange}
              value={branchCountry}
              required
              id="branchCountry"
              name="branchCountry"
              label="Country"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleBranchPinCodeChange}
              value={branchPincode}
              required
              id="branchPincode"
              name="branchPincode"
              label="Pin code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              onClick={handleSubmit}
              disabled={isDisable}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar open={showMessageBar}>
        <Alert onClose={handleClose} severity="success" variant="filled">
          Agency location added successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AgencyLocation;
