import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { red } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Footer from "./Footer";
import HeaderAndMenu from "./HeaderAndMenu";
import Pages from "./Pages";


const mdTheme = createTheme({
    palette: {
        primary: {
            main: "#12803a",
        },
        secondary: {
            light: red[700],
            main: "#bdae2b"
        },
        myColors: {
            colorOne: "#291cba",
            colorTwo: "#3cd6de"
        }
    }
});

function DashboardContent() {
    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <HeaderAndMenu/>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper sx={{p: 2, display: 'flex', flexDirection: 'column'}}>
                                    <Pages />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Footer sx={{pt: 4}}/>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function AppDashboard() {
    return <DashboardContent/>;
}