const addProgramStyles = {
    root:{
        color: '#000',
        width:"90%",
        margin:"auto",
        marginTop:"1%"
    },
    head:{
        margin:"auto",
        color: 'rgb(84, 130, 53)',
        display:"flex",
        justifyContent:"center",
        fontWeight:"600",
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
    program:{
        margin: '0% 5% 5% 0%',
         display:'flex',
          alignItems:'center',
          height:"100px",
           width:"100%",
            borderRadius:"20px",
             border:"2px solid rgb(113, 176, 71)"       
    },
    selector:{
        borderRadius:" 20px 0px 0px 20px",
        fontWeight:"700",
        fontSize: "30px",
        padding:"1vh 2vh 1vh 10vh",
    },
    label:{
        fontWeight:"700",
       fontSize:"25px",
        color:"black",
        padding:"1vh 2vh 1vh 10vh"
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
        border: "1px solid gainsboro" ,
    },
    seats:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    table:{ 
        width: "100%",
            textAlign: 'center',
            "& table":{
               width:"100%",
                borderCollapse: "collapse",
            },
            "& thead":{
                backgroundColor:"rgb(113, 173, 71)",
                color:"white",
                borderBottom:"4px solid white",
            },
            "& td,th":{
                border:"1px solid white",
                padding:"1vh 2vh"
            },
            "& tbody > tr:nth-of-type(odd)":{
                backgroundColor:"rgb(212, 226, 205)  ",
            },
            "& tbody > tr:nth-of-type(even)":{
                backgroundColor:" rgb(236, 241, 232)"
            },
            "& tr > td:last-child":{
                backgroundColor:"white",
                color:"rgb(113, 173, 71)",
                fontSize:"30px"
            },
            "& tr > td:first-child":{
                backgroundColor:"white",
                color:"rgb(113, 173, 71)",
            }
     }
}
export default addProgramStyles;