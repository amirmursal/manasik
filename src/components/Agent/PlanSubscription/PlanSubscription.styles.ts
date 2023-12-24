const planSubscriptionStyles ={




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




    head:{
        margin:"auto",
        color: 'rgb(84, 130, 53)',
        display:"flex",
        justifyContent:"center",
        fontWeight:"600",
    },
    preSubHead:{
        color: 'white',
        fontWeight:"600",
        margin:"0",
        marginTop:"8vh",
        marginBottom:"3px",
        display:"flex",
        justifyContent:"center",
        textAlign: 'center',
        width:"100%",
        border:"1px solid rgb(121, 176, 83)",
        borderRadius:"5px",
        backgroundColor:"rgb(84, 129, 53)", 
    },
    
   
}
export default planSubscriptionStyles;