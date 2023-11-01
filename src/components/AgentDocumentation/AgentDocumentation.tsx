import React from 'react';
import agentDocumentationStyles from "./AgentDocumentation.styles";
import { Box, Button, Divider, Grid, Typography, Input, Checkbox, FormControlLabel } from "@mui/material";

const AgentDocumentation = () => {
  return (
    <Box sx={agentDocumentationStyles.root}>
      <Typography
        variant="h4"
        component="div"

        sx={agentDocumentationStyles.head}
      >
        Agent Module
      </Typography>

      <Divider sx={agentDocumentationStyles.divider} />
      <Typography
        variant="h6"
        component="div"
        sx={agentDocumentationStyles.subHead}
      >
        Upload Documents </Typography>

      <Box sx={agentDocumentationStyles.documentSection}>
        <Grid container rowSpacing={7} columns={{ xs: 1, sm: 4, md: 12, }} columnSpacing={{ xs: 1, sm: 12, md: 12 }} >

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >Cancelled Cheque </Typography>
            <Input type="file" />
          </Grid>

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >Pan Card </Typography>
            <Input type="file" />
          </Grid>

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >GSTN Certificate </Typography>
            <Input type="file" />
          </Grid>

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >MSME Document </Typography>
            <Input type="file" />
          </Grid>

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >ID Proof (Aadhar, DL etc) </Typography>
            <Input type="file" />
          </Grid>

          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >PartnerShip Deed (Only applicable for partnerShip firm) </Typography>
            <Input type="file" />
          </Grid>
          <Grid item xs={6} sx={agentDocumentationStyles.input}>
            <Typography sx={agentDocumentationStyles.label} >Private Document (Only applicable for private limited firm)</Typography>
            <Input type="file" />
          </Grid>

        </Grid>
        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px">
          <FormControlLabel control={<Checkbox />} label="I here by declare that the particulars give above are correct and complete"/>         
        </Grid>
        <Grid display='flex' gap="5px">         
          <Typography>Note: please review your details as after submitting and sent to Manasik for review for further processing</Typography>
        </Grid>
        <Grid marginTop="5%" marginBottom="1%" display='flex' gap="5px">
          <Button href='/addAgentBankDetails' variant="contained"  >Back to Bank Details</Button>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Box>
      <Divider sx={agentDocumentationStyles.divider} />
    </Box>
  );
}

export default AgentDocumentation;
