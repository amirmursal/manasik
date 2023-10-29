import React from 'react';
import personalDetailsStyles from "./PersonalDetails.styles";
import { Box, Button, FormControl, TextField, Grid, Divider, InputLabel, MenuItem, Select, Typography } from "@mui/material";


const PersonalDetails = () => {
  return (
    <Box sx={personalDetailsStyles.root}>
      <Typography variant="h4" component="div" sx={personalDetailsStyles.head} >Agent Module</Typography>

      <Divider sx={personalDetailsStyles.divider} />

      <Typography variant="h6" component="div" sx={personalDetailsStyles.subHead} >Personal Details</Typography>

      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>

        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12 }}  columnSpacing={{ xs: 1, sm: 12, md: 12}}>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Travels Name </Typography>
            <TextField type='text' label='Enter Travels Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Owner Number </Typography>
            <TextField type='text' label='Enter Owner Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Business Background</Typography>
            <FormControl variant="outlined">
              <InputLabel>Background</InputLabel>
              <Select size="small" label='Background' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Travel Agent</MenuItem>
                <MenuItem value="pune">Traveler</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Business Background(Other) </Typography>
            <TextField type='text' label='Background' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Pincode </Typography>
            <TextField type='number' label='Enter Pincode' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Country </Typography>
            <TextField type='text' label='Enter Country Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >State </Typography>
            <TextField type='text' label='Enter State' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >District </Typography>
            <TextField type='text' label='Enter District' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >City </Typography>
            <TextField type='text' label='Enter City' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Address </Typography>
            <TextField type='text' label='Enter Address' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Mobile </Typography>
            <TextField type='number' label='Enter Mobile Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Phone </Typography>
            <TextField type='number' label='Enter Phone Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Email Id </Typography>
            <TextField type='email' label='Enter Email id' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Alternate Email Id </Typography>
            <TextField type='email' label='Enter Alt. Email id' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Pan</Typography>
            <TextField type='text' label='Enter Pan Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >MSME</Typography>
            <FormControl variant="outlined">
              <InputLabel>select</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Yes</MenuItem>
                <MenuItem value="pune">Now</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >MSME Number</Typography>
            <TextField type='number' label='Enter MSME Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

        </Grid>

        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button href="/addAgentBankDetails" variant="contained">Next Page</Button>
        </Grid>


      </Box>

      <Divider sx={personalDetailsStyles.divider} />
    </Box>
  );
}

export default PersonalDetails;
