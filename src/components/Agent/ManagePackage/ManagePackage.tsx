import React from "react";
import ManagePackageStyles from "./ManagePackage.styles";
import {
  Box,
  TextField,
  InputLabel,
  FormControl,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
  Button,
  IconButton
} from "@mui/material";
import Icon from "@mui/material/Icon";
import AddCircleIcon from "@mui/material/Icon";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import managePackageStyles from "./ManagePackage.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ManagePackage = () => {

const [show, setShow]= React.useState(false)
const [type, setType] = React.useState("")
const [fare, setFare] = React.useState("")
const [seat, setSeat] = React.useState("")
const [row, setRow] = React.useState([])

  const handleManagePackage = () => {
    setShow((previous) => !previous);
  };

  const handleAddButtonClick = () => {
    console.log("Button Clicked");
    const obj = {
      totalFare:fare,
      packageType:type,
      maxSeatCount:seat,
      seatBooked: 10,
      seatAvailable: 5,
    }
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "packageType", headerName: "Package Type", width: 200 },
    { field: "totalFare", headerName: "Total Fare (INR)", width: 200 },

    {
      field: "maxSeatCount",
      headerName: "Max Seat Count",
      width: 200,
    },
    {
      field: "seatBooked",
      headerName: "Seat Booked",
      width: 197,
    },
    {
      field: "seatAvailable",
      headerName: "Seat Available",
      width: 200,
    },
    {
      field: "deletePackage",
      headerName: "Delete ",
      width: 200,
    },
  ];

  const rows = [
    {
      id: 1,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 2,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 3,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 4,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 5,
      totalFare: "80,000",
      packageType: "Economy",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 6,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 7,
      totalFare: "90,000",
      packageType: "Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 8,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 9,
      totalFare: "100,000",
      packageType: "Super Delux",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
  ];



  return (
    <Box sx={ManagePackageStyles.root}>
      <Typography
        variant="h6"
        component="div"
        sx={ManagePackageStyles.preSubHead}
      >
        Add Subscription Plan
      </Typography>

      <Box sx={ManagePackageStyles.addProgramButton}>
      <Typography variant="h6">Add Subscription Plan</Typography>
        <Button color="primary" variant="contained" onClick={handleManagePackage}>
          Manage Package
        </Button>
      </Box> 

      {show && (
        <Grid container spacing={1} sx={managePackageStyles.addProgramForm}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Package Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Program Type"
                onChange={(e) => setType(e.target.value as string)}
              >
                <MenuItem value="Delux">Economy</MenuItem>
                <MenuItem value="Economy">Delux</MenuItem>
                <MenuItem value="Economy">Super Delux</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              type="number"
              label="Total Fair"
              variant="outlined"
              onChange={(e) => setFare(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              type="number"
              label="max seat count"
              variant="outlined"
              onChange={(e) => setSeat(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <IconButton color="success" 
            onClick={handleAddButtonClick}
            >
              <AddCircleIcon />
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
