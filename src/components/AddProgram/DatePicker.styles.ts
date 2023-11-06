const datePickerStyles = {
    button:{
      textTransform: 'capitalize',
        color:"black",
        width:"100%",
        fontSize:"25px",
        fontWeight:"600",
        height:"100%",
        border:"1px solid rgb(186, 214, 166)" ,

        padding:"1vh 2vh 1vh 10vh",
        '@media (max-width: 900px)': {
            fontSize: "20px",
      },
        '@media (max-width: 500px)': {
            fontSize: "20px",
            padding:"1vh 2vh 1vh 1vh",
      },
    },
    pop:{
      width:"400px",
    }
}
export default datePickerStyles;