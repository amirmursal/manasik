import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import {
  AppBarProps,
  Box,
  Container,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import AddIcon from "@mui/icons-material/Add";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import layoutStyles from "./LayoutStyles";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PaymentsIcon from "@mui/icons-material/Payments";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const drawerWidth: number = 240;

const CustomAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }: any) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const Layout = () => {
  const { username } = useSelector((state: RootState) => state.user);

  const { logout }: any = useAuth();

  const outlet = useOutlet();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  if (username?.length === 0) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box sx={layoutStyles.container}>
      <CssBaseline />
      {/* @ts-ignore */}
      <CustomAppBar position="absolute" open={open}>
        <Toolbar sx={layoutStyles.toolbar}>
          {!open && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={layoutStyles.toolBarIcon}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={layoutStyles.headingText}
          >
            Manasik
          </Typography>
        </Toolbar>
      </CustomAppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar sx={layoutStyles.drawerToolBar}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <Tooltip title="Dashboard">
            <Link to="/dashboard">
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </Tooltip>

          {username === "admin" && (
            <>
              <Tooltip title="Add Tour Agency">
                <Link to="/dashboard/addAgentDetails">
                  <ListItemButton>
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Tour Agency" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Manage Program">
                <Link to="/dashboard/addProgram">
                  <ListItemButton>
                    <ListItemIcon>
                      <PeopleIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Program" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Manage Packages">
                <Link to="/dashboard/managePackage">
                  <ListItemButton>
                    <ListItemIcon>
                      <FlightTakeoffIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Packages" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Manage Subscription">
                <Link to="/dashboard/manageSubscription">
                  <ListItemButton>
                    <ListItemIcon>
                      <CardMembershipIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Subscription" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Plan Subscription">
                <Link to="/dashboard/planSubscription">
                  <ListItemButton>
                    <ListItemIcon>
                      <LoyaltyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Plan Subscription" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Manage Offer">
                <Link to="/dashboard/manageOffer">
                  <ListItemButton>
                    <ListItemIcon>
                      <LocalOfferIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manage Offer" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Configure Package">
                <Link to="/dashboard/configurePackage">
                  <ListItemButton>
                    <ListItemIcon>
                      <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Configure Package" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="My Dashboard">
                <Link to="/dashboard/myDashboard">
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardCustomizeIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Dashboard" />
                  </ListItemButton>
                </Link>
              </Tooltip>
              <Tooltip title="Customer Payments">
                <Link to="/dashboard/customerPayments">
                  <ListItemButton>
                    <ListItemIcon>
                      <PaymentsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Customer Payments" />
                  </ListItemButton>
                </Link>
              </Tooltip>
            </>
          )}
          <Tooltip title="Logout">
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </Tooltip>
        </List>
      </Drawer>
      <Box component="main" sx={layoutStyles.mainBox}>
        <Toolbar />
        <Container maxWidth="xl" sx={layoutStyles.mainContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {outlet}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Layout;
