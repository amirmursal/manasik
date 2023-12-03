import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Divider,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CustomerPaymentsStyles from "./CustomerPayments.styles";
import React from "react";

const CustomerPayments = () => {
  return (
    <Box sx={CustomerPaymentsStyles.root}>
      <Typography
        variant="h6"
        sx={CustomerPaymentsStyles.infoText}
        component="div"
      >
        Manage Customer Payments
      </Typography>

      <Grid container spacing={0.2} columns={{ xs: 1, sm: 8, md: 10 }}>
        <Grid sx={CustomerPaymentsStyles.subHead} item xs={2}>
          <Typography variant="h6">UMRAH : 30-OCT-2023 </Typography>
        </Grid>
        <Grid sx={CustomerPaymentsStyles.subHead} item xs={2}>
          <Typography variant="h6">Customer Name: Amir Mursal</Typography>
        </Grid>
        <Grid sx={CustomerPaymentsStyles.subHead} item xs={2}>
          <Typography variant="h6">Total Fare : 80,000</Typography>
        </Grid>
        <Grid sx={CustomerPaymentsStyles.subHead} item xs={2}>
          <Typography variant="h6">Amount Paid Till Date : 50,000</Typography>
        </Grid>
        <Grid sx={CustomerPaymentsStyles.subHead} item xs={2}>
          <Typography variant="h6">Remaining Amount : 30,000</Typography>
        </Grid>
      </Grid>

      <Typography component="div" sx={CustomerPaymentsStyles.tableHead}>
        <Typography variant="h6">Add Payment</Typography>
      </Typography>

      <Box component="div" sx={CustomerPaymentsStyles.panel}>
        <Box component="div">
          <Typography variant="h6">Amount</Typography>
          <TextField size="small" sx={CustomerPaymentsStyles.input}></TextField>
        </Box>
        <Box component="div">
          <Typography variant="h6">Payment Date</Typography>
          <TextField size="small" sx={CustomerPaymentsStyles.input}></TextField>
        </Box>
        <Box component="div">
          <Typography variant="h6">Payment Method</Typography>
          <Select size="small" sx={CustomerPaymentsStyles.input}>
            <MenuItem value="upi">UPI</MenuItem>
            <MenuItem value="cheque">CHEQUE</MenuItem>
          </Select>
        </Box>
        <Box component="div">
          <Typography variant="h6">UPI ID/NUMBER</Typography>
          <TextField size="small" sx={CustomerPaymentsStyles.input}></TextField>
        </Box>

        <Box component="div">
          <Typography variant="h6">Acount No.</Typography>
          <TextField size="small" sx={CustomerPaymentsStyles.input}></TextField>
        </Box>
        <Box component="div">
          <Typography variant="h6">IFSC Code.</Typography>
          <TextField size="small" sx={CustomerPaymentsStyles.input}></TextField>
        </Box>
        <Box component="div" style={{ justifyContent: "center" }}>
          <IconButton style={{ background: "green", color: "white" }}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>

      <Box sx={CustomerPaymentsStyles.table}>
        <table>
          <thead>
            <tr>
              <th>Amount Paid</th>
              <th>Payment Date</th>
              <th>Payment Method</th>
              <th>UPI/ID Number</th>
              <th>Account Number</th>
              <th>IFSC Code</th>
              <th>Bank Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>5,000</td>
              <td>10/11/2023</td>
              <td>UPI</td>
              <td>9145426603</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>15,000</td>
              <td>12/11/2023</td>
              <td>Net Banking</td>
              <td></td>
              <td>10018810123567</td>
              <td>ICICI0023</td>
              <td>ICICI Bank</td>
            </tr>
            <tr>
              <td>30,000</td>
              <td>15/11/2023</td>
              <td>Cheque</td>
              <td>143002344</td>
              <td>10018810123009</td>
              <td>SBII-00600</td>
              <td>SBI Bank</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Box>
  );
};

export default CustomerPayments;
