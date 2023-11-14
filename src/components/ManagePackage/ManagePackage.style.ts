const managePackageStyles = {
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
    subHead:{
        color: 'white',
        fontWeight:"600",
        margin:"0",
        marginBottom:"3px",
        display:"flex",
        justifyContent:"center",
        textAlign: 'center',
        width:"100%",
        border:"1px solid rgb(121, 176, 83)",
        borderRadius:"5px",
        backgroundColor:"rgb(102, 158, 64)", 
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
    selector:{
        borderRadius:" 18px 0px 0px 18px",
        marginTop:"16px",
        fontWeight:"600",
        fontSize: "30px",
        padding:"1vh 2vh 1vh 10vh",
        '@media (max-width: 900px)': {
            fontSize: "20px",
      },
        '@media (max-width: 500px)': {
            fontSize: "20px",
           marginTop:"15px",
           borderRadius:"20px"
      },
    },
    label:{
        fontWeight:"700",
       fontSize:"25px",
        color:"black",
        padding:"1vh 2vh 1vh 10vh",

        '@media (max-width: 900px)': {
            fontSize: "20px",
      },
        '@media (max-width: 500px)': {
            fontWeight:"600",
            paddingTop:"3vh"
      },
    },
    fair:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:"1vh",
        // border:"1px solid rgb(113, 176, 71)",
        "& h6":{
            fontWeight:"600",
            fontSize:"25px",
            "@media (max-width:900px)":{
                fontSize:"20px"
            },
        },
        "@media (max-width:500px)":{
            display:"flex",
            flexFlow:"wrap",
            "& h6":{
                fontSize:"15px"
            },
        "& input":{
            width:"10%",
            padding:"5px 6px"
        },
        }
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
            fontSize:"25px",
            "@media (max-width:900px)":{
                fontSize:"20px"
            },
        },
        "@media (max-width:500px)":{
            display:"flex",
            flexFlow:"wrap",
            "& h6":{
                fontSize:"15px"
            },
        "& input":{
            width:"40px",
            padding:"5px 6px"
        },
        }
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
       marginBottom:"10px",
        overflow:"scroll",
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
export default managePackageStyles;