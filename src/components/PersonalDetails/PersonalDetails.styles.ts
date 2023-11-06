const personalDetailsStyles = {
    root:{
        color: '#000',
        width:"90%",
        margin:"auto",
        marginTop:"1%",
        },
    head:{
        margin:"auto",
        color: '#4CBB17',
        display:"flex",
        justifyContent:"center",
        fontWeight:"600",
    },
    subHead:{
        color: '#000',
        marginTop:"5vh",
        marginBottom:"4vh",
        display:"flex",
        justifyContent:"center",
        textAlign: 'center',
  
    },
    input:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        '@media (max-width: 480px)': {
              flexDirection:"column",  
        },
    },
    text:{
        width:"35vh",
        margin:"0px", 
    },
    lable:{
        '@media (max-width: 480px)': {
            width:"35vh",
      },
    },
    divider:{
        border: "1px solid gainsboro" 
    },
}
export default personalDetailsStyles;