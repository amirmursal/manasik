import React from 'react'
import ManageSubscriptionStyles from "./ManageSubscription.styles"
import {
    Box,
    Button,
    TextField,
    InputLabel,
    FormControl,
    Divider,
    Grid,
    MenuItem,
    Select,
    Typography,
  } from "@mui/material";
  
  import Icon from "@mui/material/Icon";
  import CreateIcon from "@mui/icons-material/Create";
  
const ManageSubscription = () => {
    return (
        <Box sx={ManageSubscriptionStyles.root}>
    
          <Typography
            variant="h6"
            component="div"
            sx={ManageSubscriptionStyles.preSubHead}
          >
            UMRAH 30-SEP-2023
          </Typography>
       
          <Box sx={ManageSubscriptionStyles.program}>
            <Grid
              container
              columns={{ xs: 1, sm: 8 , md: 12 }}
            >
              <Grid item xs={4} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">Seat Count</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={4} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">30 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={4} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">90 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={4} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">180 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={8} sx={ManageSubscriptionStyles.seats}>
                <Typography variant="h6">360 Days Cost</Typography>
                <TextField type="number" size="small" />
                <Icon sx={ManageSubscriptionStyles.icon}>+</Icon>
              </Grid>
            </Grid>
          </Box>
          <Box sx={ManageSubscriptionStyles.table}>
            <table>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "white" }}></th>
                  <th>Package Type</th>
                  <th>Total Fare (INR)</th>
                  <th>Max Seat Count</th>
                  <th>Seat Booked</th>
                  <th>Seat Available</th>
                  <th style={{ backgroundColor: "white" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>Economy</td>
                  <td>80,000</td>
                  <td>30</td>
                  <td>25</td>
                  <td>5</td>
                  <td>✕</td>
                </tr>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>Delux</td>
                  <td>90,000</td>
                  <td>10</td>
                  <td>8</td>
                  <td>2</td>
                  <td>✕</td>
                </tr>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>Super Delux</td>
                  <td>100,000</td>
                  <td>10</td>
                  <td>7</td>
                  <td>3</td>
                  <td>✕</td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Divider sx={ManageSubscriptionStyles.divider} />
        </Box>
      );
}

export default ManageSubscription