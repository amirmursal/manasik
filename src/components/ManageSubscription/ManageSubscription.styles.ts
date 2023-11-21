const manageSubscriptionStyles ={
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
    program:{
        margin: '0% 5% 5% 0%',
         display:'flex',
          alignItems:'center',
          height:"fit-content",
           width:"100%",
            borderRadius:"20px",
             border:"2px solid rgb(113, 176, 71)"  ,
            
    },
    fair:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderRight:"1px solid rgb(186, 214, 166)" ,
       " @media (max-width:850px)":{
            padding:"20px 0px",
            border:"1px solid rgb(186, 214, 166)" ,
      
        },
        "& input":{
            width:"60px",
            "@media (max-width:1450px)":{
                padding:"4px"
            },
            "@media (max-width:800px)":{
                width:"100px"
            }
        },
        "& h6":{
            fontWeight:"600",
            fontSize:"20px",
            "@media (max-width:1450px)":{
                fontSize:"15px"
            },
            "@media (max-width:800px)":{
                fontWeight:"600"
            }
        },
        "@media (max-width:500px)":{
            margin:"3% 3% 0 3%",
            padding:"3% 0",
            display:"flex",
            flexFlow:"wrap",
            borderRadius:"15px",
            "& h6":{
                fontSize:"15px"
            },
        "& input":{
            width:"10%",
            padding:"5px 6px"
        },
        }
    },
    divider:{
        border: "1px solid gainsboro" ,
    },
    seats:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:"1vh",
        "@media (max-width:800px)":{
            margin:"auto",
            padding:"15px 0px"
        },
        "& input":{
            width:"60px",
            "@media (max-width:1450px)":{
                padding:"4px"
            },
            "@media (max-width:800px)":{
                width:"100px",
               
            }
        },
        "& h6":{
            fontWeight:"600",
            fontSize:"20px",
            "@media (max-width:1450px)":{
                fontSize:"15px"
            },
        },
        "@media (max-width:500px)":{
            padding:"4% 0px",
            display:"flex",
            flexFlow:"wrap",
            border:"1px solid rgb(186, 214, 166)" ,
            borderRadius:"15px",
            margin:"3%",
            "& h6":{
                fontSize:"15px"
            },
        "& input":{
            width:"60px",
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
        "@media (max-width:1450px)":{
            width:"32px",
            height:"32px", 
            fontSize:"25px",
        },
        "@media (max-width:800px)":{
            borderRadius:"50%",
            width:"38px",
            height:"38px", 
            fontSize:"30px",
        },
        "@media (max-width:500px)":{
            borderRadius:"50%",
            width:"35px",
            height:"35px", 
            fontSize:"27px",
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
export default manageSubscriptionStyles;