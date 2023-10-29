import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import searchPanelStyles from "./SearchPanel.styles";
import React from "react";

const SearchPanel = () => {

    return (
        <Box sx={searchPanelStyles.root}>
            <Typography variant="h6" sx={searchPanelStyles.infoText}
                component="div">Find the Best & Reliable HAJJ and UMRAH Tours in India
            </Typography>
            <Box sx={{ margin: '5%', display:'flex', alignItems:'center' }}>
                <Grid container spacing={2} columns={{xs:1, sm:8, md:12}}>
                    <Grid item xs={3}>
                    <FormControl fullWidth variant="outlined">
                            <InputLabel>Tour Type</InputLabel>
                            <Select label="Tour Type">
                                <MenuItem value="hajj">Hajj</MenuItem>
                                <MenuItem value="umrah">Umrah</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>State</InputLabel>
                            <Select label="State">
                                <MenuItem value="maharashtra">Maharashtra</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel>City</InputLabel>
                            <Select label="City">
                                <MenuItem value="pune">Pune</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                    <FormControl variant="outlined">
                        <Button variant="contained">Search Tour</Button>
                        </FormControl>
                    </Grid>
                </Grid></Box>
        </Box>
    )
}

export default SearchPanel;