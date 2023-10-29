import React from 'react';
import personalDetailsStyles from "./PersonalDetails.styles";
import { Box, Button, FormControl, TextField, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";


const PersonalDetails = () => {
  return (
    <Box sx={personalDetailsStyles.root}>
      <Typography variant="h4" component="div" sx={personalDetailsStyles.head} >Agent Module</Typography>

      <hr style={{ border: "2px solid gainsboro" }} />

      <Typography variant="h6" component="div" sx={personalDetailsStyles.subHead} >Personal Details</Typography>

      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>


        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12 }}  columnSpacing={{ xs: 1, sm: 12, md: 12}}>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Travels Name </Typography>
            <TextField type='text' label='Enter Travels Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Owner Number </Typography>
            <TextField type='text' label='Enter Owner Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Business Background</Typography>
            <FormControl variant="outlined">
              <InputLabel>Background</InputLabel>
              <Select size="small" label='Background' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Travel Agent</MenuItem>
                <MenuItem value="pune">Traveler</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Business Background(Other) </Typography>
            <TextField type='text' label='Background' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Pincode </Typography>
            <TextField type='number' label='Enter Pincode' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Country </Typography>
            <TextField type='text' label='Enter Country Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >State </Typography>
            <TextField type='text' label='Enter State' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >District </Typography>
            <TextField type='text' label='Enter District' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >City </Typography>
            <TextField type='text' label='Enter City' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Address </Typography>
            <TextField type='text' label='Enter Address' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Mobile </Typography>
            <TextField type='number' label='Enter Mobile Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Phone </Typography>
            <TextField type='number' label='Enter Phone Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Email Id </Typography>
            <TextField type='email' label='Enter Email id' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Alternate Email Id </Typography>
            <TextField type='email' label='Enter Alt. Email id' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >Pan</Typography>
            <TextField type='text' label='Enter Pan Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >MSME</Typography>
            <FormControl variant="outlined">
              <InputLabel>select</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Yes</MenuItem>
                <MenuItem value="pune">Now</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.typo} >MSME Number</Typography>
            <TextField type='number' label='Enter MSME Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

        </Grid>

        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button href="/addAgentBankDetails" variant="contained">Next Page</Button>
        </Grid>


      </Box>

      <hr style={{ border: "0.5px solid gainsboro" }} />
    </Box>
  );
}

export default PersonalDetails;
