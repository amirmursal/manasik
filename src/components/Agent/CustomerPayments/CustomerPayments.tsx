import {
  Box,
  Grid,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Typography,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CustomerPaymentsStyles from "./CustomerPayments.styles";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import customerPaymentsStyles from "./CustomerPayments.styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const CustomerPayments = () => {




  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "amountPaid", headerName: "Amount Paid", width: 150 },
    { field: "paymentDate", headerName: "Payment Date", width: 200 },

    {
      field: "paymentMethod",
      headerName: "Payment Method",
      width: 200,
    },
    {
      field: "upiId",
      headerName: "UPI ID / Number",
      width: 200,
    },
    {
      field: "accountNumber",
      headerName: "Account Number",
      width: 200,
    },
    {
      field: "ifsccode",
      headerName: "IFSC Code",
      width: 200,
    },
    {
      field: "bankName",
      headerName: "Bank Name",
      width: 200,
    },
   
  ];

  const rows = [
    {
      id: 1,
      amountPaid: "5,000",
      paymentDate: "10/11/23",
      paymentMethod: "UPI",
      upiId: 9142456603,
      accountNumber: 10018227612987,
      ifsccode: "ICICI0023",
      bankName: "ICICI Bank",
    },
    {
      id: 2,
      amountPaid: "15,000",
      paymentDate: "12/11/23",
      paymentMethod: "Net Banking",
      upiId: 9645234789,
      accountNumber: 10018810123567,
      ifsccode: "SBI-00600",
      bankName: "SBI Bank",
    },
    {
      id: 3,
      amountPaid: "30,000",
      paymentDate: "15/11/23",
      paymentMethod: "Cheque",
      upiId: 8876452344,
      accountNumber:10018810123009,
      ifsccode: "MABH0990",
      bankName: "MAHA Bank",
    },
    
  ];






  return (
    <Box sx={CustomerPaymentsStyles.root}>
    

      {/* <Grid container spacing={0.2} columns={{ xs: 1, sm: 8, md: 10 }}>
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
      </Grid> */}


      <Grid container spacing={1} sx={CustomerPaymentsStyles.addPackageForm}>
          <Grid item xs={12} sm={6} md={1.6}>
            <TextField
              fullWidth
              type="number"
              label="Amount"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Payment Date" onChange={(newValue) => {}} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
               Payment Method
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Payment Method"
              >
                <MenuItem value="Delux">UPI</MenuItem>
                <MenuItem value="Economy">Cheque</MenuItem>
                <MenuItem value="Economy">Cash</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <TextField
              fullWidth
              type="number"
              label="UPI ID / Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <TextField
              fullWidth
              type="number"
              label="Account Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <TextField
              fullWidth
              type="number"
              label="IFSC CODE"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1.6}>
            <TextField
              fullWidth
              type="number"
              label="Bank Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={0.7}>
            <IconButton color="success" >
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>

        <br />

      <DataGrid
        keepNonExistentRowsSelected
        sx={customerPaymentsStyles.root}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowSelection={false}
        pageSizeOptions={[5, 10]}
      />
    </Box>
  
  );
};

export default CustomerPayments;
