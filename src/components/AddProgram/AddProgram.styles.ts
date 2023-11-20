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
          height:"fit-content",
           width:"100%",
            borderRadius:"20px",
             border:"2px solid rgb(113, 176, 71)"  ,
    },
    formcontrol:{
        '@media (max-width:500px)' :{
             width:"95%",
             marginTop:"15px",
             marginBottom:"15px",
        },
    },
    selector:{
        textAlign:"center",
        fontSize: "20px",
        fontWeight:"600",
        '@media (max-width: 900px)': {
            fontSize: "18px",
      },
        '@media (max-width: 500px)': {
            fontSize: "15px",
           borderRadius:"5px",
      },
    },
    label:{
       fontSize: "20px",
        fontWeight:"600",
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       textAlign:"center",
       width:"100%",
        color:"black",
        '@media (max-width: 900px)': {
            fontSize: "18px",
      },
        '@media (max-width: 500px)': {
            fontSize: "15px",
      },
    },
    input:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    text:{
        width:"35vh",
        margin:"0px"
    },
    lable:{
        '@media (max-width: 900px)': {
            width:"35vh",
      },
    },
    divider:{
        border: "1px solid gainsboro" ,
    },
    seats:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:"1vh",
        "& h6":{
            fontWeight:"600",
            fontSize:"20px",
            "@media (max-width:900px)":{
                fontSize: "18px",
            },
        },
        "@media (max-width:500px)":{
            margin:"5%",
            display:"flex",
            flexFlow:"wrap",
          
            "& h6":{
                fontSize:"15px"
            },
        "& input":{
            width:"50px",
            padding:"5px 6px"
        },
        }
    },
    pad:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
    },
    icon:{ 
        backgroundColor: "rgb(113, 173, 71)",
        color:"white",
        borderRadius:"50%",
        width:"50px",
        height:"50px",
        fontSize:"39px",
        "@media (max-width:500px)":{
    borderRadius:"50%",
      width:"40px",
       height:"40px", 
       fontSize:"30px",
        },
     },
    table:{ 
       "@media (max-width:500px)":{
            border:"5px solid rgb(212, 226, 205)",
            "& td,th":{
                border:"1px solid white",
                padding:"0px"
            },
       },

       "@media (max-width:1024px)":{
          overflow:"scroll",
       },
       marginBottom:"10px",
     
        width: "100%",
            textAlign: 'center',
            "& table":{
               minWidth:"100%",
               width:"950px",
                borderCollapse: "collapse",
                Margin:"auto"
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
            },
     },
}
export default addProgramStyles;