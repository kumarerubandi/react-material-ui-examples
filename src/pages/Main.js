import React, { useState } from "react";
import { makeStyles , withStyles } from "@material-ui/core/styles";
import {Grid,Typography , Button , Container,Breadcrumbs , Link , Box,
        TextField , MenuItem} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';

const linkStyle = {
    color:"#00A6A0",
  }
const useStyles = makeStyles((theme) => ({
    right: {
    marginLeft: 'auto',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
      
    },
    
    heading:{
        background: 'blue',
        fontWeight: 'bold',
        color: 'white',
        padding:'0 3%'
    },
    boxContent:{
        padding:'2% 3%'
    },
    dataBlock:{
        margin:'2% 0'
    },
    dFlex:{
        display: 'flex'
    },
    selectInput:{
        width:'80%'
    },
    tableContainer:{
       margin:'1% 0' 
    },
    links:linkStyle,
}));


const columns = [
    { field: 'id', headerName: 'ID',
    width: 110 ,
    renderCell: (params) => (
        <strong>
          
          <Link color="inherit" href="/" style={linkStyle}>
            {params.value}
          </Link>
        </strong>
      ),
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

export default function Main() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link color="inherit" href="/">
                Menu 1
                </Link>
                <Typography color="textPrimary">Main Page</Typography>
            </Breadcrumbs>
            <Grid spacing={2} container alignItems="center">
                <Grid item xs={1}>
                    <Link color="inherit" href="/" className={classes.links}>
                       Items 
                    </Link> 
                </Grid>
                <Grid item xs={1}>
                    <Link color="inherit" href="/" className={classes.links}>
                       Items 2
                    </Link>
                </Grid>
                <Grid item xs={2} className={classes.right}>
                    <Button  color="primary">Create New</Button>
                </Grid>
            </Grid> 
            <Box className={classes.dataBlock} >
                <Typography className={classes.heading} variant="h6">Find</Typography>
                <Box className={classes.boxContent}>
                <Grid container spacing={4}>
                  
                    <Grid item xs={3}>
                        <TextField variant="outlined" label="true" type="text" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField className={classes.selectInput} variant="outlined" label="true" select>
                        {['jjsjsjsssi','dfdeefe','refere'].map((option) => (
                            <MenuItem key={option} value={option}>
                            {option}
                            </MenuItem>
                        ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField variant="outlined" label="true" type="text" />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField variant="outlined" label="true" type="text" />
                    </Grid>

                </Grid>
                </Box>
            </Box>
            <Box className={classes.dataBlock} >
                <Typography className={classes.heading} variant="h6">Found</Typography>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                    />
                </div>
                
            </Box>
        </Container>
    )
}