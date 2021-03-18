import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: '0 auto',
    marginTop: '50px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    color:'#3f51b5'
  }
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  const [globalData, setGlobalData] = useState({})

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://disease.sh/v3/covid-19/all")
      let data = await response.json();
      setGlobalData(data)
      console.log(data);
    }
    getData();
  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(globalData).map((key , ind) => {
          return (
            <Grid item xs={12} sm={4} key={ind}>
              <Paper className={classes.paper}>
               <h3 className={classes.title}>{key.toUpperCase()}</h3>
               <h3>{globalData[key]}</h3>

              </Paper>
            </Grid>
          )
        })}
        </Grid>

    </div>
  );
}
