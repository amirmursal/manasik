import React from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import BankDetails from "../BankDetails";
import AgentDocumentation from "../AgentDocumentation";
import AddAgentDetails from "../AddAgentDetails";

const steps = ["Personal Details", "Bank details", "Documentation"];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddAgentDetails />;
    case 1:
      return <BankDetails />;
    case 2:
      return <AgentDocumentation />;
    default:
      throw new Error("Unknown step");
  }
}

const PersonalDetails = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Agent Details
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              Thank you for registration.
            </Typography>
            <Typography variant="subtitle1">
              Your documents will be verified soon. You will get a confirmation
              on email.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {getStepContent(activeStep)}
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ mt: 3, ml: 1 }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
};

export default PersonalDetails;
