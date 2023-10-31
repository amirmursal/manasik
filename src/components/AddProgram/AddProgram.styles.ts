const addProgramStyles = {

    root:{
        color: '#000',
        width:"80%",
        margin:"auto",
        marginTop:"1%"
    },
    head:{
        margin:"auto",
        color: 'rgb(84, 130, 53)',
        display:"flex",
        justifyContent:"center",
        fontWeight:"600"
    },
    subHead:{
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
        backgroundColor:"rgb(84, 130, 53)", 
    },

    selector:{
        borderRadius:" 20px 0px 0px 20px",
        height:"99px",
        fontSize:"50px",
        border:"1px solid rgb(186, 214, 166)" ,
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
        margin:"0px"
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
export default addProgramStyles;