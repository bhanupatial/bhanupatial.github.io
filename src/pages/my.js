import * as React from "react"
import { Grid,  Stepper, Step, StepLabel } from "@mui/material";
import { makeStyles } from '@mui/styles';

// Component
function MyComponent() {
    const [activeStep] = React.useState(0);
    const myResumeDataObject = {}; // Your data object
  
    const useStyles = makeStyles((theme) => ({
      centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Use 100vh to make it take the full viewport height
        width: '100vw', // Use 100vw to make it take the full viewport width
        position: 'fixed', // Use fixed to keep it in the center even when scrolling
        top: 0,
        left: 0,
        overflow: 'auto', // Allows scrolling within the container if necessary
      },
    }));
  
    const classes = useStyles();
  
  
    return (
      <div className={classes.centerContainer}>
        <Grid item xs={12} md={4}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {Object.entries(myResumeDataObject).map(([key, value], index) => (
              <Step key={index}>
                <StepLabel>{key}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </div>
    );
  }
  
    export default MyComponent;