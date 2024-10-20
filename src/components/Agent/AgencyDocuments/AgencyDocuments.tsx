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

const AgencyDocuments = () => {
  const [documentType, setDocumentType] = useState<string>("");
  const [document, setDocument] = useState<string>("");
  const [branchLocation, setBranchLocation] = useState<string>("");

  const handleSubmit = useCallback(() => {
    // call api to save basic deatils for agency
  }, []);

  const handleDocumentTypeChange = useCallback((event: SelectChangeEvent) => {
    setDocumentType(event.target.value);
  }, []);

  const handleDocumentChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDocument(event.target.value);
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
          Agency Documents
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
            <Grid item xs={12} sm={6}>
              <FormControl variant="standard" sx={{ minWidth: 200 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Document Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={documentType}
                  onChange={handleDocumentTypeChange}
                  label="Document Type"
                  fullWidth
                >
                  <MenuItem value={10}>PAN</MenuItem>
                  <MenuItem value={20}>Aadhar</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                onChange={handleDocumentChange}
                id="document"
                name="document"
                label="Document"
                fullWidth
                value={document}
                type="file"
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

export default AgencyDocuments;
