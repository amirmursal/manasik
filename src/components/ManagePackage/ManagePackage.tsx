import React from "react";
import ManagePackageStyles from "./ManagePackage.style";

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
import managePackageStyles from "./ManagePackage.style";

const ManagePackage = () => {
  return (
    <Box sx={ManagePackageStyles.root}>
      <Typography variant="h4" component="div" sx={ManagePackageStyles.head}>
        Manage Package
      </Typography>

      <Divider sx={ManagePackageStyles.divider} />

      <Typography
        variant="h6"
        component="div"
        sx={ManagePackageStyles.preSubHead}
      >
        UMRAH 30-SEP-2023
      </Typography>
      <Typography variant="h6" component="div" sx={ManagePackageStyles.subHead}>
        Add Package
      </Typography>

      <Box sx={ManagePackageStyles.program}>
        <Grid
          container
          rowSpacing={{ xs: 2 }}
          columns={{ xs: 1, sm: 4, md: 12 }}
        >
          <Grid xs={10} md={3}>
            <FormControl fullWidth variant="outlined" >
              <InputLabel sx={ManagePackageStyles.label}>
                Package Type
              </InputLabel>
              <Select sx={ManagePackageStyles.selector} label="Package Type">
                <MenuItem value="hajj">Hajj</MenuItem>
                <MenuItem value="umrah">Umrah</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={4} sx={ManagePackageStyles.fair}>
            <Typography variant="h6">Total Fair</Typography>
            <TextField type="number" size="small" style={{ width: "200px" }} />
          </Grid>

          <Grid item xs={5} sx={ManagePackageStyles.seats}>
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
    </Box>
  );
};

export default ManagePackage;
