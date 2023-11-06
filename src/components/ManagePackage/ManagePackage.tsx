import React from 'react';
import ManagePackageStyles from "./ManagePackage.style";

import { Box, Button, TextField, InputLabel,FormControl,Divider, Grid, MenuItem, Select, Typography } from "@mui/material";
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import CreateIcon from '@mui/icons-material/Create';


const ManagePackage = () => {
    return (
      <Box sx={ManagePackageStyles.root}>
        <Typography variant="h4" component="div" sx={ManagePackageStyles.head}>Manage Programs</Typography>
  
        <Divider sx={ManagePackageStyles.divider} />
  
        <Typography variant="h6" component="div" sx={ManagePackageStyles.subHead} >Add Program</Typography>
  
        <Box  sx={ManagePackageStyles.program}>
                  <Grid container rowSpacing={{xs:2}} columns={{xs:1, sm:6, md:12}}>
  
                      <Grid xs={3}>
                        <FormControl fullWidth variant="outlined"  >
                              <InputLabel  sx={ManagePackageStyles.label} >Program Type</InputLabel>
                              <Select  sx={ManagePackageStyles.selector} >
                                  <MenuItem    value="hajj">Hajj</MenuItem>
                                  <MenuItem    value="umrah">Umrah</MenuItem>
                              </Select>
                        </FormControl>
                      </Grid>
  
                      <Grid item xs={3}>
                      
                          <Typography variant='h6'  >Max Seats Count</Typography>
                          <TextField type='number'  size="small" style={{width:"200px"}} />
                        
               
                      </Grid>
  
                      <Grid item xs={6} sx={ManagePackageStyles.seats} >
                            <Typography variant='h6'  >Max Seats Count</Typography>
                            <TextField type='number'  size="small" style={{width:"200px"}} />
                            <Icon sx={ManagePackageStyles.icon}>+</Icon>
                      </Grid>
                  
                  </Grid>
          </Box>
        <Box sx={ManagePackageStyles.table} >
          
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
        {/* <Divider sx={ManagePackageStyles.divider}  /> */}
      </Box>
    );
  }
  
  export default ManagePackage;
  