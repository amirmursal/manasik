
const agentDocumentationStyles = {
    root: {
        color: '#000',
        width: "80%",
        margin: "auto",
        marginTop: "1%"
    },
    head: {
        margin: "auto",
        color: '#4CBB17',
        display: "flex",
        justifyContent: "center",
        fontWeight: "600"
    },
    subHead: {
        color: '#000',
        marginTop: "8vh",
        marginBottom: "4vh",
        display: "flex",
        justifyContent: "center",
        textAlign: 'center'
    },
    input: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '@media (max-width: 480px)': {
            flexDirection: "column",
        },
    },
    text: {
        width: "35vh",
        margin: "0px"
    },
    label: {
        '@media (max-width: 480px)': {
            width: "35vh",
        },
    },
    divider: {
        border: "1px solid gainsboro"
    },
    documentSection: {
        width: "90%", 
        margin: "auto", 
        display: 'flex', 
        flexDirection: "column", 
        alignItems: 'center'
    }
}

export default agentDocumentationStyles;