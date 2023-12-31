import React, { useState } from "react";
import ManageSubscriptionStyles from "./ManageSubscription.styles";
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
import manageSubscriptionStyles from "./ManageSubscription.styles";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const ManageSubscription = () => {
  const [show, setShow] = React.useState(false);
  const [subscriptionType, setSubscriptionType] = useState("");

  const handleManageSubscription = () => {
    setShow((previous) => !previous);
  };

  const handleAddButtonClick = () => {
    console.log("Button Clicked");
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 210 },
    { field: "seatCount", headerName: "Seat Count", width: 230 },
    { field: "days30", headerName: "30 Days", width: 230 },

    {
      field: "days90",
      headerName: "90 Days",
      width: 230,
    },
    {
      field: "days180",
      headerName: "180 Days",
      width: 230,
    },
    {
      field: "days360",
      headerName: "360 Days",
      width: 230,
    },
  ];

  const rows = [
    {
      id: 1,
      seatCount: "50",
      days30: "5000",
      days90: "10000",
      days180: "15000",
      days360: "20000",
    },
    {
      id: 2,
      seatCount: "100",
      days30: "4000",
      days90: "8000",
      days180: "12000",
      days360: "16000",
    },
    {
      id: 3,
      seatCount: "200",
      days30: "3000",
      days90: "6000",
      days180: "9000",
      days360: "13000",
    },
    {
      id: 4,
      seatCount: "500",
      days30: "6000",
      days90: "12000",
      days180: "18000",
      days360: "22000",
    },
    {
      id: 5,
      seatCount: "700",
      days30: "7000",
      days90: "14000",
      days180: "19000",
      days360: "25000",
    },
    {
      id: 6,
      seatCount: "500",
      days30: "6500",
      days90: "13200",
      days180: "19700",
      days360: "26700",
    },
    {
      id: 7,
      seatCount: "1500",
      days30: "3100",
      days90: "6400",
      days180: "11500",
      days360: "17400",
    },
    {
      id: 8,
      seatCount: "2300",
      days30: "4700",
      days90: "9600",
      days180: "13900",
      days360: "21600",
    },
    {
      id: 9,
      seatCount: "50",
      days30: "3140",
      days90: "6940",
      days180: "9160",
      days360: "13700",
    },
  ];

  return (
    <Box sx={ManageSubscriptionStyles.root}>
      <Box marginBottom={5} sx={ManageSubscriptionStyles.addSubscriptionButton}>
        <Grid item xs={12} sm={6} md={2.2}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Subscription</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Subscription Type"
              onChange={(e) => setSubscriptionType(e.target.value as string)}
            >
              <MenuItem value="hajj">Economy</MenuItem>
              <MenuItem value="umrah">Delux</MenuItem>
              <MenuItem value="umrah">Super Delux</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          color="primary"
          variant="contained"
          disabled={subscriptionType !== "" ? false : true}
          onClick={handleManageSubscription}
        >
          Add Subscription
        </Button>
      </Box>

      {show && (
        <Grid
          container
          spacing={1}
          sx={manageSubscriptionStyles.addSubscriptionForm}
        >
          <Grid item xs={12} sm={6} md={2.2}>
            <TextField
              fullWidth
              type="number"
              label="Seat Count"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.2}>
            <TextField
              fullWidth
              type="number"
              label="30 Days"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.2}>
            <TextField
              fullWidth
              type="number"
              label="90 Days"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.2}>
            <TextField
              fullWidth
              type="number"
              label="180 Days"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2.2}>
            <TextField
              fullWidth
              type="number"
              label="360 Days"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={1}>
            <IconButton color="success" onClick={handleAddButtonClick}>
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      )}
      <br />
      <DataGrid
        keepNonExistentRowsSelected
        sx={manageSubscriptionStyles.root}
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

export default ManageSubscription;
