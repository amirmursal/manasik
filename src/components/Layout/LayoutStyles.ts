const layoutStyles = {
  toolbar: {
    pr: "24px", // keep right padding when drawer closed
  },
  container: {
    display: "flex",
  },
  toolBarIcon: {
    marginRight: "36px",
  },
  headingText: {
    flexGrow: 1,
  },
  drawerToolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    px: [1],
  },
  mainContainer: {
    mt: 4,
    mb: 4,
  },
  mainBox: {
    backgroundColor: (theme: any) =>
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
};
export default layoutStyles;
