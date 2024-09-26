import React from "react";
import PlanSubscriptionStyles from "./PlanSubscription.styles";
import {
  Box,
  TextField,
  Grid,
  InputLabel,
  Select,
  Typography,
  FormControl,
  MenuItem,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const PlanSubscription = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "seatCount", headerName: "Seat Count", width: 200 },
    { field: "days30", headerName: "30 Days", width: 200 },

    {
      field: "days90",
      headerName: "90 Days",
      width: 200,
    },
    {
      field: "days180",
      headerName: "180 Days",
      width: 200,
    },
    {
      field: "days360",
      headerName: "360 Days",
      width: 200,
    },
  ];

  const rows = [
    {
      id: 1,
      seatCount: "50",
      days30: "10/11/23",
      days90: "UPI",
      days180: 9142456603,
      days360: 10018227612987,
    },
    {
      id: 2,
      seatCount: "100",
      days30: "10/11/23",
      days90: "UPI",
      days180: 9142456603,
      days360: 10018227612987,
    },
    {
      id: 3,
      seatCount: "5000",
      days30: "10/11/23",
      days90: "UPI",
      days180: 9142456603,
      days360: 10018227612987,
    },
  ];

  return (
    <Box sx={PlanSubscriptionStyles.root}>
      <Grid container spacing={1} sx={PlanSubscriptionStyles.addPackageForm}>
        <Grid item xs={12} sm={6} md={1.5}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Plan Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Plan Type"
            >
              <MenuItem value="Delux">30 Days</MenuItem>
              <MenuItem value="Economy">90 Days</MenuItem>
              <MenuItem value="Economy">180 Days</MenuItem>
              <MenuItem value="Economy">360 Days</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={1.5}>
          <TextField
            fullWidth
            type="number"
            label="Seat Count"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={1.5}>
          <TextField fullWidth type="number" label="Cost" variant="outlined" />
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Plan Start Date" onChange={(newValue) => {}} />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={12} sm={6} md={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker label="Plant End Date" onChange={(newValue) => {}} />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} sm={6} md={1.5}>
          <TextField
            fullWidth
            type="number"
            label="Seat Used"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={1.5}>
          <TextField
            fullWidth
            type="number"
            label="Balance Seat"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={0.5}>
          <IconButton color="success">
            <AddCircleIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <br />

      <DataGrid
        keepNonExistentRowsSelected
        sx={PlanSubscriptionStyles.root}
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

export default PlanSubscription;
