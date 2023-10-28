import React from 'react';
import bankDetailsStyles from "./BankDetails.styles";
import { Box, Button, TextField, Grid, MenuItem, Select, Typography } from "@mui/material";

const BankDetails = () => {
  return (
    <Box sx={bankDetailsStyles.root}>
      <Typography
        variant="h4"
        component="div"

        sx={bankDetailsStyles.head}
      >
        Agent Module
      </Typography>
      <hr style={{ border: "2px solid gainsboro" }} />


      <Typography
        variant="h6"
        component="div"
        sx={bankDetailsStyles.subHead}
      >
        Bank Details</Typography>

      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>
        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>

          <Grid item xs={6} sx={bankDetailsStyles.input}>
            <Typography >Bank Name </Typography>
            <TextField type='text' label='' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={bankDetailsStyles.input}>
            <Typography >Account Number </Typography>
            <TextField type='text' label='' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={bankDetailsStyles.input}>
            <Typography >Benificiary Name </Typography>
            <TextField type='text' label='' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={bankDetailsStyles.input}>
            <Typography >Bank Account Type   </Typography>
            <Select size="small" sx={bankDetailsStyles.text} >
              <MenuItem value="pune">Saving</MenuItem>
              <MenuItem value="pune">Current</MenuItem>
            </Select>

          </Grid>

          <Grid item xs={6} sx={bankDetailsStyles.input}>
            <Typography >Bank Account identfier (IFSC) </Typography>
            <TextField type='text' label='' size="small" sx={bankDetailsStyles.text} />
          </Grid>

        </Grid>

        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button variant="contained"  >Back to Personal Details</Button>
          <Button variant="contained">Next Page</Button>
        </Grid>


      </Box>

      <hr style={{ border: "0.5px solid gainsboro" }} />
    </Box>
  );
}

export default BankDetails;
