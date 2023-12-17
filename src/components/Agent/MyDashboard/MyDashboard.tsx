import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import MyDashboardStyles from "./MyDashboard.styles";
import React from "react";

const MyDashboard = () => {
  return (
    <Box sx={MyDashboardStyles.root}>
      <Typography variant="h6" sx={MyDashboardStyles.infoText} component="div">
        My Dashboard
      </Typography>
      <Box sx={MyDashboardStyles.mainContainer}>
        <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Program Type</InputLabel>
              <Select label="Program Type">
                <MenuItem value="hajj">Hajj</MenuItem>
                <MenuItem value="umrah">Umrah</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Travel Date</InputLabel>
              <Select label="Travel Date">
                <MenuItem value="maharashtra">Maharashtra</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Set Booking Status</InputLabel>
              <Select label="Set Booking Status">
                <MenuItem value="pune">Pune</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3} sx={MyDashboardStyles.searchButton}>
            <FormControl variant="outlined">
              <Button variant="contained">Search Tour</Button>
            </FormControl>
          </Grid>
        </Grid>
      </Box>

      <Typography component="div" sx={MyDashboardStyles.subHead}>
        <Typography variant="h6">UMRAH : 30-OCT-2023</Typography>
        <Typography variant="h6">
          Program Status : Booking In Progress
        </Typography>
      </Typography>

      <Box sx={MyDashboardStyles.table}>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Package</th>
              <th>Booking Status</th>
              <th>Total Fare</th>
              <th>Amount Paid Till Date</th>
              <th>Remaining Amount</th>
              <th>Group ID</th>
              <th>Refund Status</th>
              <th>Amount Refunded</th>
              <th>Reason For Cancellation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mujahid Shaikh</td>
              <td>Supper Deluxe</td>
              <td>Confirmed</td>
              <td>100,000</td>
              <td>100,000</td>
              <td>0</td>
              <td>GRP001</td>
              <td>NA</td>
              <td>NA</td>
              <td></td>
            </tr>
            <tr>
              <td>Mohammad Wasim</td>
              <td>Economy</td>
              <td style={{ color: "red" }}>Cancelled</td>
              <td>80,000</td>
              <td>10,000</td>
              <td>NA</td>
              <td>GRP001</td>
              <td>Refund Issued</td>
              <td>9,000</td>
              <td>Travel Plan Changed</td>
            </tr>
            <tr>
              <td>Farooq Sutar</td>
              <td>Delux</td>
              <td>Confirmed</td>
              <td>90,000</td>
              <td>90,000</td>
              <td>0</td>
              <td>GRP001</td>
              <td>NA</td>
              <td>NA</td>
              <td></td>
            </tr>
            <tr>
              <td>Amir Mursal</td>
              <td>Economy</td>
              <td>Confirmed</td>
              <td>80,000</td>
              <td>50,000</td>
              <td>30,000</td>
              <td>GRP001</td>
              <td>NA</td>
              <td>NA</td>
              <td></td>
            </tr>
            <tr>
              <td>Ayaaz Mahaphule</td>
              <td>Economy</td>
              <td style={{ color: "yellow" }}>Waiting</td>
              <td>80,000</td>
              <td>30,000</td>
              <td>50,000</td>
              <td>GRP001</td>
              <td>NA</td>
              <td>NA</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </Box>

      <Box sx={MyDashboardStyles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Address</th>
              <th>Phone No.</th>
              <th>Alternate No.</th>
              <th>Email Id</th>
              <th>Passport No.</th>
              <th>Aadhar No.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Muhammad Wasim</td>
              <td>Male</td>
              <td>09/07/1982</td>
              <td>Green Park, Kondwa, Pune</td>
              <td>9145426603</td>
              <td>8810126567</td>
              <td>wasim1982@gmail.com</td>
              <td>HS232008</td>
              <td>ABC101033303103</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default MyDashboard;
