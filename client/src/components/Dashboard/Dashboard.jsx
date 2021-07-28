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
import { isCollegeEmpty } from "../../actions/data";
import useStyles from "./styles";
import Pie from "./Charts/Pie";
import Tables from '../Table/Tables'
import { Divider } from 'antd';

export const Dashboard = ({ open, collegeData, setCollegeData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Container
        maxWidth="lg"
        className={classes.page}
      >
        <Grid
          container
          alignItems="stretch"
          spacing={4}
          style={{ backgroundColor: "#fff" }}
        >
          {/* <Grid item xs={12}> */}

          <Grid item xs={12} sm={6}>
            {/* <Paper className={classes.paper}> */}
              <Pie
                filterBy="state"
                collegeData={collegeData}
                setCollegeData={setCollegeData}
              />
            {/* </Paper> */}
          </Grid>
          {/* <Divider type="vertical" /> */}

          <Grid item xs={12} sm={6}>
            {/* <Paper className={classes.paper}> */}
              <Pie
                filterBy="course"
                collegeData={collegeData}
                setCollegeData={setCollegeData}
              />
            {/* </Paper> data ={collegeData}*/}
          </Grid>
          {!collegeData ? (
          <></>
        ) : (
          <>
            <Grid item xs={12} sm={12}>
              <Tables data ={collegeData}/>
            </Grid>
          </>
        )}
        </Grid>
        {/* </Grid> */}

        
      </Container>
    </div>
  );
};

Dashboard.propTypes = {
  props: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
