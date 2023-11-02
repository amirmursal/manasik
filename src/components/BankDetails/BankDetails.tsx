import React from 'react';
import bankDetailsStyles from "./BankDetails.styles";
import { Box, Button, TextField, InputLabel,FormControl,Divider, Grid, MenuItem, Select, Typography } from "@mui/material";

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

      <Divider sx={bankDetailsStyles.divider} />
      <Typography
        variant="h6"
        component="div"
        sx={bankDetailsStyles.subHead}
      >
        Bank Details</Typography>

      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>
        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12,  }}  columnSpacing={{ xs: 1, sm: 12, md: 12 }} >

          <Grid item xs={6}  sx={bankDetailsStyles.input}>
            <Typography sx={bankDetailsStyles.lable} >Bank Name </Typography>
            <TextField type='text' label='Enter Bank Name' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={bankDetailsStyles.input}>
            <Typography sx={bankDetailsStyles.lable} >Account Number </Typography>
            <TextField type='text' label='Enter Account Number' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={bankDetailsStyles.input}>
            <Typography sx={bankDetailsStyles.lable} >Benificiary Name </Typography>
            <TextField type='text' label='Enter Benificiary Name' size="small" sx={bankDetailsStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={bankDetailsStyles.input}>
            <Typography sx={bankDetailsStyles.lable} >Bank Account Type   </Typography>
            <FormControl variant="outlined">
              <InputLabel>Account Type</InputLabel>
            <Select size="small" label='ccount Type' sx={bankDetailsStyles.text} >
              <MenuItem value="pune">Saving</MenuItem>
              <MenuItem value="pune">Current</MenuItem>
            </Select>
          </FormControl>

          </Grid>

          <Grid item xs={6}  sx={bankDetailsStyles.input}>
            <Typography sx={bankDetailsStyles.lable} >Bank Account identfier (IFSC) </Typography>
            <TextField type='text' label='Enter IFSC' size="small" sx={bankDetailsStyles.text} />
          </Grid>

        </Grid>
        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button href='/addAgentDetails' variant="contained"  >Back to Personal Details</Button>
          <Button href='/addAgentDocuments' variant="contained">Next Page</Button>
        </Grid>
      </Box>
      <Divider sx={bankDetailsStyles.divider}  />
    </Box>
  );
}

export default BankDetails;
