import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import Fade from "@material-ui/core/Fade";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./styles";
export const Details = ({ open,collegeData }) => {
    const classes = useStyles();
    console.log(collegeData);
    return(
<div className={classes.root}>
      <CssBaseline />

      <Container
        maxWidth="lg"
        className={open === true ? classes.pageShift : classes.page}
      >
        <Grid container alignItems="stretch" spacing={4}>
          {/* <Grid item xs={12}> */}

          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              akndka
            </Paper>
          </Grid>
          
        </Grid>
        {/* </Grid> */}
      </Container>
    </div>
    );

}


  
  const mapStateToProps = (state) => ({});
  
  const mapDispatchToProps = {};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Details);
  