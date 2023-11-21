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
            Add Subscription Plan
          </Typography>
       
          <Box sx={ManageSubscriptionStyles.program}>
            <Grid
              container
              columns={{ xs: 1, sm: 4.6 , md: 12 }}
            >
              <Grid item xs={2.3} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">Seat Count</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={2.3} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">30 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={2.3} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">90 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={2.3} sx={ManageSubscriptionStyles.fair}>
                <Typography variant="h6">180 Days Cost</Typography>
                <TextField type="number" size="small" />
              </Grid>
    
              <Grid item xs={2.8} sx={ManageSubscriptionStyles.seats}>
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
                  <th>Seat Count</th>
                  <th>30 Days</th>
                  <th>90 Days</th>
                  <th>180 Days</th>
                  <th>360 Days</th>
                  <th style={{ backgroundColor: "white" }}></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>50</td>
                  <td>5000</td>
                  <td>10000</td>
                  <td>15000</td>
                  <td>22500</td>
                  <td>✕</td>
                </tr>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>100</td>
                  <td>47500</td>
                  <td>15000</td>
                  <td>22500</td>
                  <td>33750</td>
                  <td>✕</td>
                </tr>
                <tr>
                  <td>
                    <CreateIcon />
                  </td>
                  <td>5000</td>
                  <td>16875</td>
                  <td>33750</td>
                  <td>50625</td>
                  <td>75938</td>
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