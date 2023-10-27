import React from 'react';
import personalDetailsStyles from "./PersonalDetails.styles";
import { Box, Button, Container, FormControl, Input, TextField, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";


function PersonalDetails() {
  return (
    <Box sx={personalDetailsStyles.root}>
        <Typography variant="h4" component="div" sx={personalDetailsStyles.head} >Agent Module</Typography>
         
        <hr style={{border:"2px solid gainsboro"}}/>

        <Typography variant="h6" component="div" sx={personalDetailsStyles.subHead} >Personal Details</Typography>

      <Box sx={{width:"90%",margin:"auto", display:'flex', flexDirection:"column", alignItems:'center' }}>
     
     
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
        
        <Grid item  xs={6} sx={personalDetailsStyles.input}>
          <Typography >Travels Name </Typography>
            <TextField type='text' label='Enter Travels Name'  size="small" sx={personalDetailsStyles.text} />
        </Grid>
      
        <Grid item  xs={6} sx={personalDetailsStyles.input}>
          <Typography >Owner Number </Typography>
            <TextField type='text' label='Enter Owner Name' size="small" sx={personalDetailsStyles.text} />
        </Grid>

        <Grid item xs={6}  sx={personalDetailsStyles.input}>
            <Typography >Business Background</Typography>
            <FormControl  variant="outlined">
                  <InputLabel>Background</InputLabel>
                <Select  size="small"  label='Background' sx={personalDetailsStyles.text} >
                      <MenuItem value="pune">Travel Agen</MenuItem>
                      <MenuItem value="pune">Traveler</MenuItem>
                </Select>
                </FormControl>    
        </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Business Background(Other) </Typography>
            <TextField type='text' label='Background' size="small" sx={personalDetailsStyles.text} />
        </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Pincode </Typography>
            <TextField type='number' label='Enter Pincode' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Country </Typography>
            <TextField type='text' label='Enter Country Name' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >State </Typography>
            <TextField type='text' label='Enter State' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >District </Typography>
            <TextField type='text' label='Enter District' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >City </Typography>
            <TextField type='text' label='Enter City' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Address </Typography>
            <TextField type='text' label='Enter Address' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Mobile </Typography>
            <TextField type='number' label='Enter Mobile Number' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Phone </Typography>
            <TextField type='number' label='Enter Phone Number' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Email Id </Typography>
            <TextField type='email' label='Enter Email id' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Alternate Email Id </Typography>
            <TextField type='email' label='Enter Alt. Email id' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >Pan</Typography>
            <TextField type='text' label='Enter Pan Number' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

         <Grid item xs={6}  sx={personalDetailsStyles.input}>
            <Typography >MSME</Typography>
              <FormControl  variant="outlined">
                  <InputLabel>select</InputLabel>
                  <Select size="small" label='select' sx={personalDetailsStyles.text} >
                        <MenuItem value="pune">Yes</MenuItem>
                        <MenuItem value="pune">Now</MenuItem>
                  </Select>
              </FormControl>
        </Grid>

        <Grid item xs={6} sx={personalDetailsStyles.input}>
            <Typography >MSME Number</Typography>
            <TextField type='number' label='Enter MSME Number' size="small" sx={personalDetailsStyles.text}  />
         </Grid>

      </Grid>

        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  > 
              <Button variant="contained">Next Page</Button>
        </Grid>

        
      </Box>

      <hr style={{border:"0.5px solid gainsboro"}}/>
    </Box>
  );
}

export default PersonalDetails;
