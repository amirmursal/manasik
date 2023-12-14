const addProgramStyles = {
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
    addProgramButton: {
      display: "flex",
      justifyContent: "space-between",
    },
    addProgramForm: {
      display: "flex",
      alignItems: "center",
    },
  };
  export default addProgramStyles;