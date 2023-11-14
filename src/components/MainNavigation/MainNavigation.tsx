import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import mainNavigationStyles from "./MainNavigation.styles";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

const MainNavigation = () => {
  return (
    <AppBar component="nav" sx={mainNavigationStyles.root} position="sticky">
      <Toolbar sx={mainNavigationStyles.mainContainer}>
        <Box>
          <Typography
            variant="h4"
            component="div"
            sx={mainNavigationStyles.heading}
          >
            Manasik
          </Typography>
          <Typography
            variant="subtitle2"
            component="span"
            sx={mainNavigationStyles.subHeading}
          >
            Make Your Pilgrimage Journey Easy
          </Typography>
        </Box>
        <Box>
          <Button
            href="/addAgentDetails"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<FlightTakeoffIcon sx={mainNavigationStyles.icon} />}
          >
            Add Tour Agency
          </Button>
          <Button
            href="/addProgram"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<GridViewIcon sx={mainNavigationStyles.icon} />}
          >
            Add Program
          </Button>
          <Button
            href="/managePackage"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<TableRowsIcon sx={mainNavigationStyles.icon} />}
          >
            Manage Package
          </Button>
          <Button
            href="/#"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<HeadsetMicIcon sx={mainNavigationStyles.icon} />}
          >
            Help
          </Button>
          <Button
            href="/#"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<PersonIcon sx={mainNavigationStyles.icon} />}
          >
            Account
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
