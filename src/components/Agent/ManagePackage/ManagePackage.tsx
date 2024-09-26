import React, { useState } from "react";
import ManagePackageStyles from "./ManagePackage.styles";
import {
  Box,
  TextField,
  InputLabel,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Button,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import managePackageStyles from "./ManagePackage.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ManagePackage = () => {
  const [show, setShow] = React.useState(false);
  const [programType, setProgramType] = useState("");

  const handleManagePackage = () => {
    setShow((previous) => !previous);
  };

  const handleAddButtonClick = () => {
    console.log("Button Clicked");
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 210 },
    { field: "packageType", headerName: "Package Type", width: 210 },
    { field: "totalFare", headerName: "Total Fare (INR)", width: 210 },

    {
      field: "maxSeatCount",
      headerName: "Max Seat Count",
      width: 210,
    },
    {
      field: "minBookingAmount",
      headerName: "Min Booking Amount",
      width: 215,
    },
    {
      field: "seatBooked",
      headerName: "Seat Booked",
      width: 210,
    },
    {
      field: "seatAvailable",
      headerName: "Seat Available",
      width: 210,
    },
  ];

  const rows = [
    {
      id: 1,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "3000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 2,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "4000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 3,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "5000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 4,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "3000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 5,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "3000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 6,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "4000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 7,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "4000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 8,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "5000",
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 9,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      minBookingAmount: "5000",
      seatBooked: 10,
      seatAvailable: 5,
    },
  ];

  return (
    <Box sx={ManagePackageStyles.root}>
      <Box marginBottom={5} sx={ManagePackageStyles.addPackageButton}>
        <Grid item xs={12} sm={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Program</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Program Type"
              onChange={(e) => setProgramType(e.target.value as string)}
            >
              <MenuItem value="hajj">Hajj</MenuItem>
              <MenuItem value="umrah">Umrah</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          disabled={programType !== "" ? false : true}
          onClick={handleManagePackage}
        >
          Add Package
        </Button>
      </Box>

      {show && (
        <Grid container spacing={1} sx={managePackageStyles.addPackageForm}>
          <Grid item xs={12} sm={6} md={2}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Package Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Package Type"
              >
                <MenuItem value="Delux">Economy</MenuItem>
                <MenuItem value="Economy">Delux</MenuItem>
                <MenuItem value="Economy">Super Delux</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Total Fair"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Max Seat Count"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              fullWidth
              type="number"
              label="Minimum Booking Amount"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <IconButton color="success" onClick={handleAddButtonClick}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <br />
      <DataGrid
        keepNonExistentRowsSelected
        sx={managePackageStyles.root}
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

export default ManagePackage;
