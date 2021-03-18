import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:1000,
    margin:'0 auto',
    marginTop: 80
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function InfoGrid() {
    let[allData,setallData]=useState({})
    useEffect( () => {

        async function getApi() {
        //   let response = await fetch(" https://covid19.mathdro.id/api")
        let response = await fetch("https://disease.sh/v3/covid-19/all")
        // let response1 = await fetch("https://disease.sh/v3/covid-19/countries")


          
          let data = await response.json();
          setallData(data);
    
         
        }
        getApi();

      },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
      {Object.keys(allData).map((val,ind)=>{
        return(

        <Grid item xs={12} lg={4} key={ind}>
          <Paper className={classes.paper} elevation={3}>
          <h3 style={{color:"#3f51b5"}}>{val.toUpperCase()}</h3>
          <h3 style={{color:"black"}}>{allData[val]}</h3>

          
          </Paper>
        </Grid>
        )
     
      })}
      </Grid>
    </div>
  );
}