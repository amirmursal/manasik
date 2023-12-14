import ConfigurePackageStyles from "./ConfigurePackage.style";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const ConfigurePackage = () => {
  return (
    <Box sx={ConfigurePackageStyles.root}>
      <Typography variant="h4" component="div" sx={ConfigurePackageStyles.head}>
        Configure Package
      </Typography>

      <Divider sx={ConfigurePackageStyles.divider} />

      <Typography
        variant="h6"
        component="div"
        sx={ConfigurePackageStyles.preSubHead}
      >
        Select Facilities For UMRAH 30-SEP-2023 Economy Package
      </Typography>

      <Box sx={ConfigurePackageStyles.program}>
        <Grid container columns={{ xs: 1, sm: 6, md: 9 }}>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>15 Days Tour</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>30 Days Tour</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>40 Days Tour</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Makkaha Al Mukarramah - 5 Start Hotel</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Makkaha Al Mukarramah - 3 Start Hotel</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Madinah Al Munawwarah - 5 Start Hotel</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Madinah Al Munawwarah - 3 Start Hotel</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Flight Non-Stop</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Flight 1 stop</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Flight 2 stop</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>All Meals-Buffet</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>All Meals-Buffet</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>ziyarat in Makkah & Madinah</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Alim Guidnce</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Complete Local Transport</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Tour Manager</Typography>
          </Grid>
          <Grid xs={3} sx={ConfigurePackageStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>24 Hours Assistance</Typography>
          </Grid>
        </Grid>
        <Grid container sx={ConfigurePackageStyles.button}>
          <Button variant="contained" color="success">
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default ConfigurePackage;
