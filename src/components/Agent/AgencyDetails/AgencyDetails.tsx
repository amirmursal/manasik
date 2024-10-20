import React, { ChangeEvent, useCallback, useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Container,
  Paper,
} from "@mui/material";

const AgencyDetails = () => {
  const [agencyName, setAgencyName] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [alternteMobileNumber, setAlternateMobileNumber] = useState<string>("");
  const [agencyPan, setAgencyPan] = useState<string>("");
  const [agencyGST, setAgencyGST] = useState<string>("");
  const [ownerAadhar, setOwnerAadhar] = useState<string>("");
  const [msme, setMSME] = useState<string>("");

  const handleSubmit = useCallback(() => {
    // call api to save basic deatils for agency
  }, []);

  const handleAgencyNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAgencyName(event.target.value);
    },
    []
  );

  const handleMobileNumberChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMobileNumber(event.target.value);
    },
    []
  );

  const handleAltMobileNumberChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAlternateMobileNumber(event.target.value);
    },
    []
  );

  const handleAgencyPanChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAgencyPan(event.target.value);
    },
    []
  );

  const handleAgencyGSTChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAgencyGST(event.target.value);
    },
    []
  );

  const handleOwnerAadharChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setOwnerAadhar(event.target.value);
    },
    []
  );

  const handleMSMEChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMSME(event.target.value);
    },
    []
  );

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Agency Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              onChange={handleAgencyNameChange}
              required
              id="agencyName"
              name="agencyName"
              label="Agency Name"
              fullWidth
              value={agencyName}
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleMobileNumberChange}
              id="mobile"
              name="mobile"
              label="Mobile"
              fullWidth
              value={mobileNumber}
              type="number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleAltMobileNumberChange}
              value={alternteMobileNumber}
              id="alternateMobile"
              name="alternateMobile"
              label="Alternate Mobile"
              fullWidth
              type="number"
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleAgencyPanChange}
              value={agencyPan}
              id="agnecyPan"
              name="agnecyPan"
              label="Agnecy Pan"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleAgencyGSTChange}
              value={agencyGST}
              id="agnecyGST"
              name="agnecyGST"
              label="Agnecy GST"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              onChange={handleOwnerAadharChange}
              value={ownerAadhar}
              id="ownerAadhar"
              name="ownerAadhar"
              label="Owner Aadhar"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              onChange={handleMSMEChange}
              value={msme}
              required
              id="msme"
              name="msme"
              label="MSME"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default AgencyDetails;
