import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import mainNavigationStyles from "./MainNavigation.styles";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useAuth } from "../../hooks/useAuth";

const MainNavigation = () => {
  const { logout }: any = useAuth();

  return (
    <AppBar
      component="nav"
      sx={mainNavigationStyles.root}
      position="sticky"
      color="primary"
    >
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
            href="/dashboard/addAgentDetails"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<FlightTakeoffIcon sx={mainNavigationStyles.icon} />}
          >
            Add Tour Agency
          </Button>
          <Button
            href="/dashboard/addProgram"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<GridViewIcon sx={mainNavigationStyles.icon} />}
          >
            Add Program
          </Button>
          <Button
            href="/dashboard/managePackage"
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<TableRowsIcon sx={mainNavigationStyles.icon} />}
          >
            Manage Package
          </Button>
          <Button
            onClick={logout}
            variant="text"
            sx={mainNavigationStyles.buttonText}
            startIcon={<Logout sx={mainNavigationStyles.icon} />}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
