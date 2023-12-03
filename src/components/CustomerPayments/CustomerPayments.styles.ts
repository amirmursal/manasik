import { Divider } from "@mui/material";
const customerPaymentsStyles = {
  root: {
    color: "#000",
  },
  infoText: {
    margin: "0% 5% 5% 5%",
    textAlign: "center",
  },
  subHead: {
    //     color: "white",
    //     marginBottom: "3px",
    textAlign: "center",

    //     width: "100%",
    //     border: "1px solid rgb(121, 176, 83)",
    //     borderRadius: "5px",
    //     flexWrap:"wrap",
    //     "@media (max-width:600px)":{
    //     justifyContent:"center",
    //     },

    "& > h6": {
      //         margin:"auto",
      fontWeight: "550",
      fontSize: "17px",
      color: "white",
      padding: "3% 0%",
      //         width:"20%",
      backgroundColor: "rgb(126, 171, 84)",
      //         "@media (max-width:740px)":{
      //             fontSize:"17px",
      //           },
    },
  },

  tableHead: {
    color: "white",
    margin: "0",
    marginTop: "8vh",
    marginBottom: "3px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "rgb(138, 138, 138)",
    border: "1px solid black",
    "& > h6": {
      fontWeight: "600",
    },
  },

  panel: {
    border: "2px solid green",
    marginBottom: "2%",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    h6: { fontWeight: "600", fontSize: "15px" },
    "& > div": {
      "@media (max-width:500px)": {
        width: "100%",
      },
      padding: "1%",
      display: "flex",
      gap: "10px",
      justifyContent: "start",
      alignItems: "center",
      //     border:"1px solid red",
      flexWrap: "wrap",
    },
  },
  input: {
    width: "100px",
    "@media (max-width:500px)": {
      width: "100%",
    },
  },

  table: {
    "@media (max-width:500px)": {
      border: "2px solid gray",
      "& td,th": {
        border: "1px solid white",
        padding: "0px",
      },
    },
    "@media (max-width:1024px)": {
      overflow: "scroll",
    },
    marginBottom: "10px",
    width: "100%",
    textAlign: "center",
    "& table": {
      minWidth: "100%",
      width: "950px",
      borderCollapse: "collapse",
      Margin: "auto",
    },
    "& thead": {
      backgroundColor: "rgb(165, 165, 165)",
      color: "white",
      borderBottom: "4px solid white",
    },
    "& td,th": {
      border: "1px solid white",
      padding: "1vh 0",
    },
    "& tbody > tr:nth-of-type(odd)": {
      backgroundColor: "rgb(225, 225, 225)  ",
    },
    "& tbody > tr:nth-of-type(even)": {
      backgroundColor: " rgb(240, 240, 240)",
    },
  },
};
export default customerPaymentsStyles;
