const planSubscriptionStyles = {
  root: {
    "& .MuiDataGrid-columnHeader": {
      color: "#fff",
      background: "#388e3c",
    },
    "& .MuiDataGrid-row:nth-child(even)": {
      background: "#ebf1e8",
    },
    "& .MuiDataGrid-row:nth-child(odd)": {
      background: "#d4e2ce",
    },
    "& .MuiSvgIcon-root": {
      //color: "#fff",
    },
  },
  addPackageButton: {
    display: "flex",
    justifyContent: "space-between",
    height: "40px",
  },
  addPackageForm: {
    display: "flex",
    alignItems: "center",
  },
};
export default planSubscriptionStyles;
