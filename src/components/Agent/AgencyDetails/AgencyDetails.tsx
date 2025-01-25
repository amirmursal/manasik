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

import { useAddAgencyMutation } from "../../../services/agency";

const AgencyDetails = () => {
  const [agencyName, setAgencyName] = useState<string | undefined>(undefined);
  const [mobileNumber, setMobileNumber] = useState<string | undefined>(
    undefined
  );
  const [alternteMobileNumber, setAlternateMobileNumber] = useState<
    string | undefined
  >(undefined);
  const [agencyPan, setAgencyPan] = useState<string | undefined>(undefined);
  const [agencyGST, setAgencyGST] = useState<string | undefined>(undefined);
  const [ownerAadhar, setOwnerAadhar] = useState<string | undefined>(undefined);
  const [showMessageBar, setShowMessageBar] = useState<boolean>(false);
  const [addAgency] = useAddAgencyMutation();

  const reset = useCallback(() => {
    setAgencyName("");
    setMobileNumber("");
    setAlternateMobileNumber("");
    setAgencyPan("");
    setAgencyGST("");
    setOwnerAadhar("");
  }, []);

  const handleSubmit = useCallback(async () => {
    const agency = {
      agencyName,
      mobileNum: mobileNumber,
      alternateNum: alternteMobileNumber,
      agencyPan,
      agencyGstn: agencyGST,
      ownerAadhar,
    };
    const { data }: any = await addAgency(agency);
    if (data) {
      setShowMessageBar(true);
      reset();
    }
  }, [
    addAgency,
    agencyGST,
    agencyName,
    agencyPan,
    alternteMobileNumber,
    mobileNumber,
    ownerAadhar,
    reset,
  ]);

  const isDisable = useMemo(
    () =>
      !agencyName ||
      !mobileNumber ||
      !alternteMobileNumber ||
      !agencyPan ||
      !agencyGST ||
      !ownerAadhar,
    [
      agencyGST,
      agencyName,
      agencyPan,
      alternteMobileNumber,
      mobileNumber,
      ownerAadhar,
    ]
  );

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

  const handleClose = useCallback(() => {
    setShowMessageBar(false);
  }, []);

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
          <Grid item xs={12}>
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
          Agency Added successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AgencyDetails;
