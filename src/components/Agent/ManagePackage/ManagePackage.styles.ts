const managePackageStyles = {
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

    preSubHead:{
        color: 'white',
        fontWeight:"600",
        margin:"0",
        marginTop:"opx",
        marginBottom:"5vh",
        display:"flex",
        justifyContent:"center",
        textAlign: 'center',
        width:"100%",
        border:"1px solid rgb(121, 176, 83)",
        borderRadius:"5px",
        backgroundColor:"rgb(84, 129, 53)", 
    },
}
export default managePackageStyles;