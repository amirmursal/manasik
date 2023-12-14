const myDashboardStyles = {
    root:{
        color: '#000'
    },
    infoText:{
        margin: '0% 5% 5% 5%',
        textAlign: 'center'
    },
    subHead: {
        display:"flex",
        padding:".1% 2%",
        justifyContent:"space-between",
        color: "white",
        margin: "0",
        marginBottom: "3px",
        textAlign: "center",
        width: "100%",
        border: "1px solid rgb(121, 176, 83)",
        borderRadius: "5px",
        backgroundColor: "rgb(84, 129, 53)",
        flexWrap:"wrap",
        "@media (max-width:600px)":{
        justifyContent:"center"
        },

        "& > h6":{
            fontWeight: "600",
            "@media (max-width:740px)":{
                fontSize:"17px",
              },
        },

      },

      table:{ 
        "@media (max-width:500px)":{
             border:"2px solid gray",
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
                 backgroundColor:"rgb(165, 165, 165)",
                 color:"white",
                 borderBottom:"4px solid white",
             },
             "& td,th":{
                 border:"1px solid white",
                 padding:"1vh 0"
             },

             "& tbody > tr > td:nth-of-type(1)":{
                color:"#00BFFF"
             },
             "& tbody > tr > td:nth-of-type(5)":{
                color:"#00BFFF"
             },
             "& tbody > tr:nth-of-type(odd)":{
                 backgroundColor:"rgb(225, 225, 225)  ",
             },
             "& tbody > tr:nth-of-type(even)":{
                 backgroundColor:" rgb(240, 240, 240)"
             },
      },
}
export default myDashboardStyles;