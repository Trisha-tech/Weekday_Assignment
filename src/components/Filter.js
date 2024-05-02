import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Container,Typography } from '@mui/material';
import Button from '@mui/material/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const experience = [
    'Internship',
    'Entry Level',
    'Associate',
    'Mid Senior Level',
    'Director',
    'Executive'
];

const company = [
    'Weekday',
    'Uplers',
    'Crossover',
    'Microsoft',
    'Coders Brain',
    'IBM',
    'S&P Global',
    'Zigsaw',
    'JobDost',
    'Accenture',
    'RealPage, Inc',
    'FedEx ACC',
    'LTIMindTree'
];

const remote = [
    'onsite',
    'remote',
    'hybrid'
];

const location = [
    'Bengaluru',
    'Pune',
    'Bengaluru North',
    'Chennai',
    'Hyderabad',
    'Noida',
    'Gurugram',
    'Mumbai',
    'Ahmedabad',
    'Jaipur'
]

const role = [
    'Software Engineer',
    'Fullstack Engineer',
    'JavaScript Developer',
    'PHP Developer',
    'Cloud Engineer',
    'Web Developer',
    'Backend Developer',
    'Java Software Engineer',
    'Python Developer',
    'Senior Java Software Engineer',
    'Dotnet Developer',
    'Application Developer'
];

const teckStack = [
    'AWS',
    'Android',
    'Figma',
    'iOS',
    'JavaScript',
    'React Native',
    'Tailwind CSS',
    'LARAVEL',
    'MongoDB',
    'PHP',
    'PostgreSQL',
    'ReactJS',
    'CSS',
    'HTML',
    'Wordpress',
    'SEO',
    'Cloud Computing',
    'Jenkins',
    'Linux',
    'SQL',
    'Terraform'
];

const salary = [
    '1 - 2',
    '2 - 3',
    '3 - 4',
    '4 - 5',
    '5 - 6',
    '6 - 7',
    '7 - 8',
    '8 - 9',
    '9 - 10',
    '10 - 11',
    '11 - 12'
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Filter() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
    const [personExp, setPersonExp] = React.useState([]);
    const [personCompany, setPersonCompany] = React.useState([]);
    const [personRemote, setPersonRemote] = React.useState([]);
    const [personLocation, setPersonLocation] = React.useState([]);
    const [personRole, setPersonRole] = React.useState([]);
    const [personStack, setPersonStack] = React.useState([]);
    const [personSalary, setPersonSalary] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
       <Box>
        <Box bgcolor="black" color="white" style={{height:"200px"}}>
             <Typography variant='h4' align='center' style={{paddingTop:"80px"}}>
                Candidate Application
            </Typography>
            </Box>
       
       <Container>
           
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} sm={3} md={3}>

                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personExp}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Experience</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Experience</em>
                            </MenuItem>
                            {experience.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6} sm={3} md={3}>

                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personCompany}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Company</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Company</em>
                            </MenuItem>
                            {company.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personRemote}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Remote</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Remote</em>
                            </MenuItem>
                            {remote.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personLocation}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Location</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Location</em>
                            </MenuItem>
                            {location.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>



            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={6} sm={3} md={3}>

                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personRole}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Role</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Role</em>
                            </MenuItem>
                            {role.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6} sm={3} md={3}>

                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personStack}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Tech Stack</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Teck Stack</em>
                            </MenuItem>
                            {teckStack.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <FormControl sx={{ m: 4, width: 250, mt: 3 }}>
                        <Select
                            multiple
                            displayEmpty
                            value={personSalary}
                            onChange={handleChange}
                            input={<OutlinedInput />}
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <em>Annual salary (in lakhs)</em>;
                                }

                                return selected.join(', ');
                            }}
                            MenuProps={MenuProps}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem disabled value="">
                                <em>Annual salary (in lakhs)</em>
                            </MenuItem>
                            {salary.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Button variant="contained" size="large" style={{ marginTop: "25px", marginLeft: "25px", width: "250px", height: "55px" }}>Search</Button>

                </Grid>
            </Grid>


        </Container>
        </Box>
    );
}
