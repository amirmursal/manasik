import React, { useState } from "react";
import addProgramStyles from "./AddProgram.styles";
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
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const AddProgram = () => {
  const [show, setShow] = useState(false);

  const handleAddProgram = () => {
    setShow((previous) => !previous);
  };

  const handleAddButtonClick = () => {
    console.log("Button Clicked");
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "programType", headerName: "Program Type", width: 200 },
    { field: "travelDate", headerName: "Travel Date", width: 200 },
    {
      field: "programStatus",
      headerName: "Program Status",
      width: 200,
    },
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
  ];

  const rows = [
    {
      id: 1,
      travelDate: "12/10/2024",
      programType: "Umrah",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 2,
      travelDate: "12/10/2024",
      programType: "Hajj",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 3,
      travelDate: "12/10/2024",
      programType: "Umrah",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 4,
      travelDate: "12/10/2024",
      programType: "Umrah",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 5,
      travelDate: "12/10/2024",
      programType: "Umrah",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 6,
      travelDate: "12/10/2024",
      programType: "Hajj",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 7,
      travelDate: "12/10/2024",
      programType: "Hajj",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 8,
      travelDate: "12/10/2024",
      programType: "Hajj",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
    {
      id: 9,
      travelDate: "12/10/2024",
      programType: "Hajj",
      programStatus: "Close",
      maxSeatCount: 50,
      seatBooked: 10,
      seatAvailable: 5,
    },
  ];

  return (
    <Box>
      <Box sx={addProgramStyles.addProgramButton}>
        <Typography variant="h6">Balance Subscription: 50</Typography>
        <Button color="primary" variant="contained" onClick={handleAddProgram}>
          Add Program
        </Button>
      </Box>
      {show && (
        <Grid container spacing={1} sx={addProgramStyles.addProgramForm}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Program Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Program Type"
              >
                <MenuItem value="hajj">Hajj</MenuItem>
                <MenuItem value="umrah">Umrah</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker label="Travel Date" onChange={(newValue) => {}} />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              type="number"
              label="Seat Count"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <IconButton color="primary" onClick={handleAddButtonClick}>
              <AddCircleIcon />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <br />
      <DataGrid
        keepNonExistentRowsSelected
        sx={addProgramStyles.root}
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

export default AddProgram;
