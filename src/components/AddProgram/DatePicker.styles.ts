const datePickerStyles = {
    button:{
      textTransform: 'capitalize',
        color:"black",
        width:"100%",
        fontSize:"20px",
        fontWeight:"600",
        height:"100%",
        border:"1px solid rgb(186, 214, 166)" ,

        '@media (max-width: 900px)': {
            fontSize: "18px",
           
      },
        '@media (max-width: 500px)': {
            fontSize: "20px",
            padding:"1vh 2vh 1vh 1vh",
            width:"95%",
            margin:"auto"
      },
    },
    pop:{
      width:"400px",
    }
}
export default datePickerStyles;