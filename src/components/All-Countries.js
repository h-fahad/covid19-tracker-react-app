import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 80,
        flexGrow: 1,
    },
    title: {
        textAlign: 'left'
    },
    table: {
        height: "auto",
        display: 'block'
    }
}));

export default function AllCountries() {
    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://disease.sh/v3/covid-19/countries");
            let data = await response.json();

             setGlobalData(Object.values(data))
            console.log(Object.values(data))

        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>

          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Country Name</TableCell>
                <TableCell align="right">Total Cases</TableCell>
                <TableCell align="right">Active Cases</TableCell>
                <TableCell align="right">Deaths&nbsp;</TableCell>
                <TableCell align="right">Population&nbsp;</TableCell>
                <TableCell align="right">Recovered&nbsp;</TableCell>
                <TableCell align="right">Tests&nbsp;</TableCell>
                <TableCell align="right">Today Case&nbsp;</TableCell>
                <TableCell align="right">Today Deaths&nbsp;</TableCell>
                <TableCell align="right">Today Recovered&nbsp;</TableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {globalData.map((key,ind) => (
                <TableRow key={ind}>
                  <TableCell component="th" scope="row">  {globalData[ind].country}</TableCell>
                  <TableCell align="right"> {globalData[ind].cases}</TableCell>
                  <TableCell align="right"> {globalData[ind].active}</TableCell>
                  <TableCell align="right"> {globalData[ind].deaths}</TableCell>
                  <TableCell align="right"> {globalData[ind].population}</TableCell>
                  <TableCell align="right"> {globalData[ind].recovered}</TableCell>
                  <TableCell align="right"> {globalData[ind].tests}</TableCell>
                  <TableCell align="right"> {globalData[ind].todayCases}</TableCell>
                  <TableCell align="right"> {globalData[ind].todayDeaths}</TableCell>
                  <TableCell align="right"> {globalData[ind].todayRecovered}</TableCell>




                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>




            
          </Grid>
          </Grid>
          

          </div>
        
    );

}