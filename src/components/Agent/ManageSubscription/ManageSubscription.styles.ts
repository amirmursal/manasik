const manageSubscriptionStyles = {
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
    addSubscriptionButton: {
      display: "flex",
      justifyContent: "space-between",
    },
    addSubscriptionForm: {
      display: "flex",
      alignItems: "center",
    },
    endButton:{
        display:"flex",
        justifyContent:"center",
        marginTop:"30px"
    }
  };
  export default manageSubscriptionStyles;
  