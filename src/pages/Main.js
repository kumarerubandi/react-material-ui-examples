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
        

const useStyles = makeStyles((theme) => ({
    right: {
      marginLeft: 'auto'
    },
    container:{
       padding:'1% 0'
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
    }
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
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
            {/* <Grid spacing={3} container alignItems="center">
                <Grid >
                    <Link color="inherit" href="/">
                       Items 
                    </Link> 
                    <Link color="inherit" href="/">
                       Items 2
                    </Link>
                </Grid>
                <Grid className={classes.right}>
                    <Button  color="primary">Create New</Button>
                </Grid>
            </Grid>  */}
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
                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table  className={classes.table} size="small" >
                        <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                
            </Box>
        </Container>
    )
}