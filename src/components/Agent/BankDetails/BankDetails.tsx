import React from "react";
import {
  TextField,
  InputLabel,
  FormControl,
  Grid,
  Select,
  Typography,
  MenuItem,
} from "@mui/material";

const BankDetails = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Bank Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="bankName"
            name="bankName"
            label="Bank Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="accountNumber"
            name="accountNumber"
            label="Account Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="beneficiaryName"
            name="beneficiaryName"
            label="Beneficiary Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl variant="standard" fullWidth>
            <InputLabel>Account Type</InputLabel>
            <Select label="Account Type">
              <MenuItem value={10}>Saving</MenuItem>
              <MenuItem value={20}>Current</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ifsc"
            name="ifsc"
            label="IFSC Code"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default BankDetails;
