const planSubscriptionStyles ={
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
            "@media (max-width:500px)":{
                paddingBottom:"3%"
            },
    },
    fair:{
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        borderRight:"1px solid rgb(186, 214, 166)" ,
        padding:"2vh 0",
       " @media (max-width:850px)":{
            padding:"20px 5%",
            border:"1px solid rgb(186, 214, 166)" ,
            display:"flex",
            justifyContent:"space-between",
        },
        "@media (max-width:500px)":{
            margin:"3% 3% 0 3%",
            padding:"3% 3%",
            display:"flex",
            flexFlow:"wrap",
            borderRadius:"15px",
        },
        "& input":{
            width:"60px",
            "@media (max-width:1450px)":{
                padding:"4px"
            },
            "@media (max-width:850px)":{
                width:"100px"
            },
            "@media (max-width:500px)":{
                width:"160px"
            },
            "@media (max-width:350px)":{
                width:"110px"

            }
        },
        "& h6":{
            fontWeight:"600",
            fontSize:"20px",
            "@media (max-width:1450px)":{
                fontSize:"15px"
            },
            "@media (max-width:850px)":{
                fontWeight:"600"
            },
            "@media (max-width:500px)":{
                fontSize:"15px"
            }
        },
    },

    divider:{
        border: "1px solid gainsboro" ,
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
                padding:"1vh 0"
            },
            "& tbody > tr:nth-of-type(odd)":{
                backgroundColor:"rgb(212, 226, 205)  ",
            },
            "& tbody > tr:nth-of-type(even)":{
                backgroundColor:" rgb(236, 241, 232)"
            },
     },
}
export default planSubscriptionStyles;