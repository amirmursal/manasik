import React from "react";
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
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";


const MyDashboard = () => {


  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "customerName", headerName: "Customer Name", width: 180 },
    { field: "package", headerName: "Package", width: 140 },

    {
      field: "bookingStatus",
      headerName: "Booking Status",
      width: 130,
    },
    {
      field: "totalFair",
      headerName: "Total Fair",
      width: 110,
    },
    {
      field: "amountPaid",
      headerName: "Amount Paid Till Date",
      width: 180,
    },
    {
      field: "remainingAmount",
      headerName: "Remaining Amount",
      width: 150,
    },
    {
      field: "groupId",
      headerName: "Group ID",
      width: 130,
    },
    {
      field: "refundStatus",
      headerName: "Refund Status",
      width: 150,
    },
    {
      field: "amountRefunded",
      headerName: "Amount Refunded",
      width: 150,
    },
    {
      field: "reasonCancellation",
      headerName: "Reason For Cancellation",
      width: 180,
    },
   
  ];

  const rows = [
    {
      id: 1,
      customerName: "Mujahid Shaikh",
      package: "Supper Deluxe",
      bookingStatus: "Confirmed",
      totalFair:"100,000",
      amountPaid: "100,000",
      remainingAmount: "0",
      groupId: "GRP001",
      refundStatus: "NA",
      amountRefunded:"NA",
      reasonCancellation:""
    },
    {
      id: 2,
      customerName: "Mohammad Wasim",
      package: "Economy",
      bookingStatus: "Cancelled",
      totalFair:"80,000",
      amountPaid: "10,000",
      remainingAmount: "NA",
      groupId: "GRP001",
      refundStatus: "Refund Issued",
      amountRefunded:"9,000",
      reasonCancellation:"Travel Plan Changed"
    },
    {
      id: 3,
      customerName: "Farooq Sutar",
      package: "Deluxe",
      bookingStatus: "Confirmed",
      totalFair:"90,000",
      amountPaid: "90,000",
      remainingAmount: "0",
      groupId: "GRP001",
      refundStatus: "NA",
      amountRefunded:"NA",
      reasonCancellation:""
    },
    {
      id: 3,
      customerName: "Amir Mursal",
      package: "Economy",
      bookingStatus: "Confirmed",
      totalFair:"80,000",
      amountPaid: "50,000",
      remainingAmount: "30,000",
      groupId: "GRP001",
      refundStatus: "NA",
      amountRefunded:"NA",
      reasonCancellation:""
    },
    {
      id: 3,
      customerName: "Ayaaz Mahaphule",
      package: "Economy",
      bookingStatus: "Waiting",
      totalFair:"80,000",
      amountPaid: "30,000",
      remainingAmount: "50,000",
      groupId: "GRP001",
      refundStatus: "NA",
      amountRefunded:"NA",
      reasonCancellation:""
    },
  
    
  ];



  return (
    <Box sx={MyDashboardStyles.root}>
     
     <Grid container spacing={1} sx={MyDashboardStyles.addPackageForm}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
              Program Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Payment Method"
              >
                <MenuItem value="hajj">Hajj</MenuItem>
                <MenuItem value="umrah">Umrah</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Payment Date" onChange={(newValue) => {}} />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
               Set Booking Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Set Booking Status"
              >
                <MenuItem value="Delux">Confirmed</MenuItem>
                <MenuItem value="Economy">Cancelled</MenuItem>
                <MenuItem value="Economy">Waiting</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
     
          <Grid item xs={12} sm={6} md={3}>
            <IconButton color="success" >
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>

     

        <br />

<DataGrid
  keepNonExistentRowsSelected
  sx={MyDashboardStyles.root}
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

export default MyDashboard;
