import * as React from "react"
import { Grid, Typography, Box, } from '@mui/material';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from "@mui/material";

const ContactInfo = () => {
    const emailUser = "bhanupatial";
    const emailDomain = "gmail.com";
    const phoneNumber = "+91-976-400-6178";

    // Function to assemble email dynamically
    const getEmail = () => `${emailUser}@${emailDomain}`;

    // Function to assemble phone dynamically
    const getPhone = () => phoneNumber;

    return (
        <Paper elevation={3} sx={{ width: '100%', height: '100%', backgroundColor: '#ccd7db', borderRadius: '10px' }}>
            <Grid container direction="column" justifyContent="flex-start"
                alignItems="left" spacing={1} >
                <Grid item>
                    <IconButton component="a" href="https://www.linkedin.com/in/bhanupatial" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon />
                        <Box ml={2}> {/* Add this line */}
                            <Typography variant="body2" spacing={3}>linkedin.com/in/bhanupatial</Typography>
                        </Box>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton component="a" href="https://maps.app.goo.gl/MypWQb95JLFGyqYEA" target="_blank" rel="noopener noreferrer">
                        <LocationOnIcon />
                        <Box ml={1}> {/* Add this line */}
                            <Typography variant="body2" spacing={3}>Pune, Maharashtra, India</Typography>
                        </Box>

                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton component="a" href={`mailto:${getEmail()}`} target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                        <Box ml={1}> {/* Add this line */}
                            <Typography variant="body2">{getEmail()}</Typography>
                        </Box>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton component="a" href={`tel:${getPhone()}`} target="_blank" rel="noopener noreferrer">
                        <PhoneIcon />
                        <Box ml={1}> {/* Add this line */}
                            <Typography variant="body2" spacing={3}>{getPhone()}</Typography>
                        </Box>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ContactInfo

export const Head = () => <title>Bhanu Patial</title>

