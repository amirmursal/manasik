import ManageOfferStyles from "./ManageOffer.style";
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
import Checkbox from "@mui/material/Checkbox";
import Icon from "@mui/material/Icon";
import CreateIcon from "@mui/icons-material/Create";
const ManageOffer = () => {
  return (
    <Box sx={ManageOfferStyles.root}>
      <Typography variant="h4" component="div" sx={ManageOfferStyles.head}>
        Manage Offer
      </Typography>

      <Divider sx={ManageOfferStyles.divider} />

      <Typography
        variant="h6"
        component="div"
        sx={ManageOfferStyles.preSubHead}
      >
        Select Offers for UMRAH 30-SEP-2023 Economy Package
      </Typography>

      <Box sx={ManageOfferStyles.program}>
        <Grid container columns={{ xs: 1, sm: 6, md: 9 }}>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>One Time Payment Discount</Typography>
          </Grid>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Group Booking Discount</Typography>
          </Grid>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Ramzan Special Offer</Typography>
          </Grid>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Newly Married Couple Discount</Typography>
          </Grid>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Hafiz/Alim Honour Discount</Typography>
          </Grid>
          <Grid xs={3} sx={ManageOfferStyles.offer}>
            <Checkbox defaultChecked color="success" />
            <Typography>Frequent Flyer Discount</Typography>
          </Grid>
        </Grid>
        <Grid container sx={ManageOfferStyles.button}>
        <Button variant="contained" color="success" >Submit</Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default ManageOffer;
