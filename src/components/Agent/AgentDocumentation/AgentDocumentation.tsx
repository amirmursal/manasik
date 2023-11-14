import React from "react";
import {
  TextField,
  Grid,
  Typography,
  Input,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const AgentDocumentation = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Documentation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">Cancelled Cheque *</Typography>
          <TextField
            required
            id="cancelledCheque"
            name="cancelledCheque"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">PAN *</Typography>
          <TextField
            required
            id="pan"
            name="pan"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">GSTN Certificate *</Typography>
          <TextField
            required
            id="gstnCertificate"
            name="gstnCertificate"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">MSME Document *</Typography>
          <TextField
            required
            id="msmeDocument"
            name="msmeDocument"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1">
            ID Proof (Aadhar, DL etc) *
          </Typography>
          <TextField
            required
            id="aadhar"
            name="aadhar"
            fullWidth
            variant="standard"
            type="file"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            PartnerShip Deed (Only applicable for partnerShip firm)
          </Typography>
          <Input type="file" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Private Limited Document (Only applicable for private limited firm)
          </Typography>
          <Input type="file" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox />}
            label="I here by declare that the particulars give above are correct and complete"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">
            Note: please review your details as after submitting and sent to
            Manasik for review for further processing
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default AgentDocumentation;
