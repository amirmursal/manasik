import React from 'react';
import personalDetailsStyles from "./PersonalDetails.styles";
import { Box, Button, FormControl, TextField, Grid, Divider, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const PersonalDetails = () => {
  return (
    <Box sx={personalDetailsStyles.root}>
      <Typography variant="h4" component="div" sx={personalDetailsStyles.head} >Agent Module</Typography>

      <Divider sx={personalDetailsStyles.divider} />

      <Typography variant="h6" component="div" sx={personalDetailsStyles.subHead} >Personal Details</Typography>

      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>

        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12 }}  columnSpacing={{ xs: 1, sm: 12, md: 12}}>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Agency Name</Typography>
            <TextField type='text' label='Enter Agency Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Owner First Name </Typography>
            <TextField type='text' label='Enter Owner First Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Owner Middle Name </Typography>
            <TextField type='text' label='Enter Owner First Name' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Owner Last Name </Typography>
            <TextField type='text' label='Enter Owner First Name' size="small" sx={personalDetailsStyles.text} />
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
            <FormControl variant="outlined">
              <InputLabel>Country</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                <MenuItem value="Pakistan">Pakistan</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >State </Typography>
            <FormControl variant="outlined">
              <InputLabel>Country</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                <MenuItem value="Telengana">Telengana</MenuItem>
                <MenuItem value="Karnataka">Karnataka</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >District </Typography>
            <FormControl variant="outlined">
              <InputLabel>District</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Latur">Latur</MenuItem>
                <MenuItem value="Aurangabad">Aurangabad</MenuItem>
                <MenuItem value="Usmanabad">Usmanabad</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >City </Typography>
            <TextField type='text' label='Enter City' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Address </Typography>
            <TextField type='text' label='Enter Address' multiline rows={2} sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Mobile </Typography>
            <TextField type='number' label='Enter Mobile Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Alternate Mobile </Typography>
            <TextField type='number' label='Enter Alternate Number' size="small" sx={personalDetailsStyles.text} />
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
            <Typography sx={personalDetailsStyles.lable} >Agency PAN</Typography>
            <TextField type='text' label='Enter Agency PAN' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >GSTN</Typography>
            <TextField type='text' label='Enter GSTN' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Owner Aadhar</Typography>
            <TextField type='text' label='Enter Owner Aadhar' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >MSME</Typography>
            <FormControl variant="outlined">
              <InputLabel>select</InputLabel>
              <Select size="small" label='select' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Yes</MenuItem>
                <MenuItem value="pune">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >MSME Number</Typography>
            <TextField type='number' label='Enter MSME Number' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Status</Typography>
            <FormControl variant="outlined">
              <InputLabel>Status</InputLabel>
              <Select size="small" label='Status' sx={personalDetailsStyles.text} >
                <MenuItem value="pune">Active</MenuItem>
                <MenuItem value="pune">In-Active</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Onboarding Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='On boarding Date' sx={personalDetailsStyles.text} />
             </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Termination Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Termination Date' sx={personalDetailsStyles.text} />
             </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Created By</Typography>
            <TextField type='number' label='CreatedBy' size="small" sx={personalDetailsStyles.text} />
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Created Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Created Date' sx={personalDetailsStyles.text} />
             </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Last Modified Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Last Modified Date' sx={personalDetailsStyles.text} />
             </LocalizationProvider>
          </Grid>

          <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography sx={personalDetailsStyles.lable} >Last Modified By</Typography>
            <TextField type='number' label='Last Modified By' size="small" sx={personalDetailsStyles.text} />
          </Grid>

      

        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button href="/addAgentBankDetails" variant="contained">Next Page</Button>
        </Grid>

      </Grid>

      </Box>

      <Divider sx={personalDetailsStyles.divider} />

    </Box>
  );
}

export default PersonalDetails;
