import React from 'react';
import AddProgramStyles from "./AddProgram.styles";
import PickerWithButtonField from "./DatePicker"
import { Box, Button, TextField, InputLabel,FormControl,Divider, Grid, MenuItem, Select, Typography } from "@mui/material";

const AddProgram = () => {
  return (
    <Box sx={AddProgramStyles.root}>
      <Typography variant="h4" component="div" sx={AddProgramStyles.head}>Manage Programs</Typography>

      <Divider sx={AddProgramStyles.divider} />

      <Typography variant="h6" component="div" sx={AddProgramStyles.subHead} >Add Program</Typography>

      <Box sx={{ margin: '0% 5% 5% 0%', display:'flex', alignItems:'center',height:"100px", width:"100%", borderRadius:"20px", border:"2px solid rgb(113, 176, 71)" }}>
                <Grid container  columns={{xs:1, sm:8, md:12}}>
                    <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined"  >
                            <InputLabel style={{fontSize:"30px", color:"black"}} >Program Type</InputLabel>
                            <Select label="Tour Type" sx={AddProgramStyles.selector} >
                                <MenuItem value="hajj">Hajj</MenuItem>
                                <MenuItem value="umrah">Umrah</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <PickerWithButtonField/>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>City</InputLabel>
                            <Select label="City">
                                <MenuItem value="pune">Pune</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                    <FormControl variant="outlined">
                        <Button variant="contained">Search Tour</Button>
                        </FormControl>
                    </Grid>
                </Grid>
        </Box>



      <Box sx={{ width: "90%", margin: "auto", display: 'flex', flexDirection: "column", alignItems: 'center' }}>
        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12,  }}  columnSpacing={{ xs: 1, sm: 12, md: 12 }} >

          <Grid item xs={6}  sx={AddProgramStyles.input}>
            <Typography sx={AddProgramStyles.lable} >Bank Name </Typography>
            <TextField type='text' label='Enter Bank Name' size="small" sx={AddProgramStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={AddProgramStyles.input}>
            <Typography sx={AddProgramStyles.lable} >Account Number </Typography>
            <TextField type='text' label='Enter Account Number' size="small" sx={AddProgramStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={AddProgramStyles.input}>
            <Typography sx={AddProgramStyles.lable} >Benificiary Name </Typography>
            <TextField type='text' label='Enter Benificiary Name' size="small" sx={AddProgramStyles.text} />
          </Grid>

          <Grid item xs={6}  sx={AddProgramStyles.input}>
            <Typography sx={AddProgramStyles.lable} >Bank Account Type   </Typography>
            <FormControl variant="outlined">
              <InputLabel>Account Type</InputLabel>
            <Select size="small" label='ccount Type' sx={AddProgramStyles.text} >
              <MenuItem value="pune">Saving</MenuItem>
              <MenuItem value="pune">Current</MenuItem>
            </Select>
          </FormControl>

          </Grid>

          <Grid item xs={6}  sx={AddProgramStyles.input}>
            <Typography sx={AddProgramStyles.lable} >Bank Account identfier (IFSC) </Typography>
            <TextField type='text' label='Enter IFSC' size="small" sx={AddProgramStyles.text} />
          </Grid>

        </Grid>
        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px"  >
          <Button href='/addAgentDetails' variant="contained"  >Back to Personal Details</Button>
          <Button variant="contained">Next Page</Button>
        </Grid>
      </Box>
      <Divider sx={AddProgramStyles.divider}  />
    </Box>
  );
}

export default AddProgram;
