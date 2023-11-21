import React from "react";
import ManagePackageStyles from "./ManagePackage.styles";

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

const ManagePackage = () => {
  return (
    <Box sx={ManagePackageStyles.root}>
      <Typography
        variant="h6"
        component="div"
        sx={ManagePackageStyles.preSubHead}
      >
        Add Subscription Plan
      </Typography>
      <Typography variant="h6" component="div" sx={ManagePackageStyles.subHead}>
        Add Package
      </Typography>

      <Box sx={ManagePackageStyles.program}>
        <Grid
          container
          columns={{ xs: 1, sm: 6 , md: 12 }}
        >
          <Grid xs={3} sx={ManagePackageStyles.pad} >
            <FormControl
              sx={ManagePackageStyles.formcontrol}
              fullWidth
              variant="outlined"
            >
              <InputLabel sx={ManagePackageStyles.label}>Package Type</InputLabel>
              <Select sx={ManagePackageStyles.selector} >
                <MenuItem value="hajj">Economy</MenuItem>
                <MenuItem value="umrah">Delux</MenuItem>
                <MenuItem value="umrah">Super Delux</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={3} sx={ManagePackageStyles.fair}>
            <Typography variant="h6">Total Fair</Typography>
            <TextField type="number" size="small" style={{ width: "200px" }} />
          </Grid>

          <Grid item xs={6} sx={ManagePackageStyles.seats}>
            <Typography variant="h6">Max Seats Count</Typography>
            <TextField type="number" size="small" />
            <Icon sx={ManagePackageStyles.icon}>+</Icon>
          </Grid>
        </Grid>
      </Box>
      <Box sx={ManagePackageStyles.table}>
        <table>
          <thead>
            <tr>
              <th style={{ backgroundColor: "white" }}></th>
              <th>Package Type</th>
              <th>Total Fare (INR)</th>
              <th>Max Seat Count</th>
              <th>Seat Booked</th>
              <th>Seat Available</th>
              <th style={{ backgroundColor: "white" }}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <CreateIcon />
              </td>
              <td>Economy</td>
              <td>80,000</td>
              <td>30</td>
              <td>25</td>
              <td>5</td>
              <td>✕</td>
            </tr>
            <tr>
              <td>
                <CreateIcon />
              </td>
              <td>Delux</td>
              <td>90,000</td>
              <td>10</td>
              <td>8</td>
              <td>2</td>
              <td>✕</td>
            </tr>
            <tr>
              <td>
                <CreateIcon />
              </td>
              <td>Super Delux</td>
              <td>100,000</td>
              <td>10</td>
              <td>7</td>
              <td>3</td>
              <td>✕</td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Divider sx={ManagePackageStyles.divider} />
    </Box>
  );
};

export default ManagePackage;
