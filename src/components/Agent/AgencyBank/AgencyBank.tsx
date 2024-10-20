import React, { ChangeEvent, useCallback, useState } from "react";
import {
  TextField,
  Grid,
  Typography,
  Button,
  Container,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const AgencyBank = () => {
  const [bankName, setBankName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [beneficiaryName, setBeneficiaryName] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [branchLocation, setBranchLocation] = useState<string>("");

  const handleSubmit = useCallback(() => {
    // call api to save basic deatils for agency
  }, []);

  const handleBankNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBankName(event.target.value);
    },
    []
  );

  const handleAccountNumberChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAccountNumber(event.target.value);
    },
    []
  );

  const handleBeneficiaryNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setBeneficiaryName(event.target.value);
    },
    []
  );

  const handleAccountTypeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAccountType(event.target.value);
    },
    []
  );

  const handleIfscCodeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setIfscCode(event.target.value);
    },
    []
  );

  const handleBranchLocationChange = useCallback((event: SelectChangeEvent) => {
    setBranchLocation(event.target.value);
  }, []);

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Agency Bank Details
        </Typography>
        <FormControl variant="standard" sx={{ minWidth: 200 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Branch Location
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={branchLocation}
            onChange={handleBranchLocationChange}
            label="Document Type"
            fullWidth
          >
            <MenuItem value="pune">Pune</MenuItem>
            <MenuItem value="pimpari">Pimpari</MenuItem>
          </Select>
        </FormControl>
        {branchLocation && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                onChange={handleBankNameChange}
                required
                id="bankName"
                name="bankName"
                label="Bank Name"
                fullWidth
                value={bankName}
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleAccountNumberChange}
                id="accountNumber"
                name="accountNumber"
                label="Account Number"
                fullWidth
                value={accountNumber}
                type="number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleBeneficiaryNameChange}
                value={beneficiaryName}
                id="beneficiaryName"
                name="beneficiaryName"
                label="Beneficiary Name"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleAccountTypeChange}
                value={accountType}
                id="accountType"
                name="accountType"
                label="Account Type"
                fullWidth
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleIfscCodeChange}
                value={ifscCode}
                id="ifscCode"
                name="ifscCode"
                label="IFSC Code"
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
        )}
      </Paper>
    </Container>
  );
};

export default AgencyBank;
