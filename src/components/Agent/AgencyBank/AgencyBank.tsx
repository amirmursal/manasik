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
import { useAddAgencyBankMutation } from "../../../services/agency";

const AgencyBank = () => {
  const [bankName, setBankName] = useState<string>("");
  const [accountNumber, setAccountNumber] = useState<string>("");
  const [beneficiaryName, setBeneficiaryName] = useState<string>("");
  const [accountType, setAccountType] = useState<string>("");
  const [ifscCode, setIfscCode] = useState<string>("");
  const [showMessageBar, setShowMessageBar] = useState<boolean>(false);
  const [addAgencyBank] = useAddAgencyBankMutation();

  const reset = useCallback(() => {
    setBankName("");
    setAccountNumber("");
    setBeneficiaryName("");
    setAccountType("");
    setIfscCode("");
  }, []);

  const handleSubmit = useCallback(async () => {
    const agencyBank = {
      bankName,
      accountNumber,
      beneficiaryName,
      accountType,
      ifsCode: ifscCode,
    };
    const { data }: any = await addAgencyBank({
      agencyBank,
      agencyId: 15,
      locationId: 4,
    });
    if (data) {
      setShowMessageBar(true);
      reset();
    }
  }, [
    accountNumber,
    accountType,
    addAgencyBank,
    bankName,
    beneficiaryName,
    ifscCode,
    reset,
  ]);

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

  const handleClose = useCallback(() => {
    setShowMessageBar(false);
  }, []);

  const isDisable = useMemo(
    () =>
      !bankName ||
      !accountNumber ||
      !beneficiaryName ||
      !accountType ||
      !ifscCode,
    [accountNumber, accountType, bankName, beneficiaryName, ifscCode]
  );

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant="h6" gutterBottom>
          Agency Bank Details
        </Typography>

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
          Agency bank added successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default AgencyBank;
