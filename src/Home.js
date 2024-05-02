import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Container, Box, Grid, Button } from '@mui/material';
import Data from './data.json'

export default function JobCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container >

            <Grid container spacing={5} style={{ marginTop: "20px" }}>
                {
                    Data.map((result, index) => (
                        <Grid item xs={12} sm={4} ms={4} key={index}>
                            <Card style={{ padding: "10px", marginBottom: "30px" }}>
                                <Card style={{ margin: "20px", padding: "5px", borderRadius: "50px", maxWidth: "180px", paddingLeft: "10px" }}>
                                    <Typography style={{ fontSize: "12px" }}>Posted 6 days ago</Typography>
                                </Card>
                                <Box display="flex">
                                    <Avatar sx={{ width: 84, height: 84, borderRadius: "50px" }} aria-label="recipe">

                                    </Avatar>
                                    <Box paddingLeft="10px">
                                        <Typography variant='h5'>{result.company}</Typography>
                                        <Typography variant='h6'>{result.title}</Typography>
                                        <Typography >{result.location}</Typography>
                                    </Box>
                                </Box>
                                <Typography style={{ paddingLeft: "15px", paddingTop: "10px", fontSize: "20px" }}>Estimated Salary: {result.salary} LPA</Typography>
                                <Typography style={{ fontSize: "22px", fontWeight: 500, paddingLeft: "15px", paddingTop: "14px" }}>About Company</Typography>
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {result.description}
                                    </Typography>
                                    <Typography style={{ fontSize: "16px", marginTop: "14px" }}>Minimum Experience  </Typography>
                                    <Typography>{result.experience}</Typography>
                                    <Grid>
                                        <Grid>
                                            <Button variant="contained" style={{ background: "black", width: "280px", margin: "10px" }}>View Job</Button>
                                        </Grid>
                                        <Grid> <Button variant="contained" style={{ background: "black", width: "280px", margin: "10px" }}>Apply</Button></Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}
