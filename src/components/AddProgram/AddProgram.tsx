import React from 'react';
import AddProgramStyles from "./AddProgram.styles";
import PickerWithButtonField from "./DatePicker"
import { Box, Button, TextField, InputLabel,FormControl,Divider, Grid, MenuItem, Select, Typography } from "@mui/material";
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import CreateIcon from '@mui/icons-material/Create';

const AddProgram = () => {
  return (
    <Box sx={AddProgramStyles.root}>
      <Typography variant="h4" component="div" sx={AddProgramStyles.head}>Manage Programs</Typography>

      <Divider sx={AddProgramStyles.divider} />

      <Typography variant="h6" component="div" sx={AddProgramStyles.subHead} >Add Program</Typography>

      <Box  sx={AddProgramStyles.program}>
                <Grid container rowSpacing={{xs:2}} columns={{xs:1, sm:6, md:12}}>

                    <Grid xs={3}>
                      <FormControl fullWidth variant="outlined"  >
                            <InputLabel  sx={AddProgramStyles.label} >Program Type</InputLabel>
                            <Select  sx={AddProgramStyles.selector} >
                                <MenuItem    value="hajj">Hajj</MenuItem>
                                <MenuItem    value="umrah">Umrah</MenuItem>
                            </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                        <PickerWithButtonField/>
                    </Grid>

                    <Grid item xs={6} sx={AddProgramStyles.seats} >
                          <Typography variant='h6'  >Max Seats Count</Typography>
                          <TextField type='number'  size="small" style={{width:"200px"}} />
                          <Icon sx={AddProgramStyles.icon}>+</Icon>
                    </Grid>
                
                </Grid>
        </Box>
      <Box sx={AddProgramStyles.table} >
        
          <table>
            <thead>
           
              <tr>
                <th style={{backgroundColor:"white"}}></th>
                <th>Pogram Type</th>
                <th>Travel Date</th>
                <th>Pogram Status</th>
                <th>Max Seat Count</th>
                <th>Seat Booked</th>
                <th>Seat Available</th>
                <th style={{backgroundColor:"white"}} ></th>
              </tr>
            </thead>
            <tbody>
          
              <tr>
                <td><CreateIcon /></td>
                <td>UMRAH</td>
                <td>30-Sep-2023</td>
                <td>Ready for Travel</td>
                <td>50</td>
                <td>50</td>
                <td>o</td>
                <td>✕</td>
              </tr>
              <tr>
                <td><CreateIcon /></td>
                <td>HAJJ</td>
                <td>15-July-2024</td>
                <td>Booking In Progress</td>
                <td>200</td>
                <td>20</td>
                <td>180</td>
                <td>✕</td>
              </tr>
              <tr>
                <td><CreateIcon /></td>
                <td>UMRAH</td>
                <td>10-Apr-2023</td>
                <td>Closed</td>
                <td>50</td>
                <td>45</td>
                <td>5</td>
                <td>✕</td>
              </tr>
              <tr>
                <td><CreateIcon /></td>
                <td>UMRAH</td>
                <td>05-May-2023</td>
                <td>Canceled</td>
                <td>50</td>
                <td>45</td>
                <td>5</td>
                <td>✕</td>
              </tr>
            </tbody>
          </table>

      </Box>
      <Divider sx={AddProgramStyles.divider}  />
    </Box>
  );
}

export default AddProgram;
