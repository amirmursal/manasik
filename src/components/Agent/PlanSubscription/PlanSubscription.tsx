import React from "react";
import PlanSubscriptionStyles from "./PlanSubscription.styles";
import { Box, TextField, Divider, Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const PlanSubscription = () => {
  return (
    <Box sx={PlanSubscriptionStyles.root}>
      <Typography
        variant="h6"
        component="div"
        sx={PlanSubscriptionStyles.preSubHead}
      >
        Current Subscription Plan
      </Typography>

      <Box sx={PlanSubscriptionStyles.program}>
        <Grid container columns={{ xs: 1, sm: 4, md: 14 }}>
          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Plan Type</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Seat Count</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Cost</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Plan Start Date</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Plan End Date</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Seat Used</Typography>
            <TextField type="number" size="small" />
          </Grid>

          <Grid item xs={2} sx={PlanSubscriptionStyles.fair}>
            <Typography variant="h6">Balance Seat</Typography>
            <TextField type="number" size="small" />
          </Grid>
        </Grid>
      </Box>
      <Box sx={PlanSubscriptionStyles.table}>
        <Typography
          variant="h6"
          component="div"
          sx={PlanSubscriptionStyles.preSubHead}
        >
          Upgrade Subscription Plan
        </Typography>
        <table>
          <thead>
            <tr>
              <th>Seat Count</th>
              <th>30 Days</th>
              <th>90 Days</th>
              <th>180 Days</th>
              <th>360 Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>50</td>
              <td>
                <Checkbox defaultChecked color="success" />
                5000
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                10000
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                15000
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                22500
              </td>
            </tr>
            <tr>
              <td>100</td>
              <td>
                <Checkbox defaultChecked color="success" />
                47500
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                15000
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                22500
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                33750
              </td>
            </tr>
            <tr>
              <td>5000</td>
              <td>
                <Checkbox defaultChecked color="success" />
                16875
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                33750
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                50625
              </td>
              <td>
                <Checkbox defaultChecked color="success" />
                75938
              </td>
            </tr>
          </tbody>
        </table>
      </Box>
      <Divider sx={PlanSubscriptionStyles.divider} />
    </Box>
  );
};

export default PlanSubscription;
