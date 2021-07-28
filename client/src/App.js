import React, { Component, useState, useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import { getStudents, getCollegesByCourse , getCollegesByState} from "./actions/data";
import useStyles from "./styles";
import Dashboard from "./components/Dashboard/Dashboard";
import Details from "./components/Details/Details";
import SideBar from "./components/sideBar/SideBar";

import ReactDOM, {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
const App = () => {
  const theme = useTheme();

  const classes = useStyles();

  const [collegeData, setCollegeData] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCollegesByCourse());
    dispatch(getStudents());
    dispatch(getCollegesByState());
  }, [collegeData, dispatch]);

  return (
    <Router className={classes.root}>
      <Grow in>
        <Container>
          {/* <Grid container justify="space-between" spacing={3}> */}
          <Switch>
            
            <Route exact path="/">
              <SideBar
                Page={Dashboard}
                collegeData ={collegeData}
                setCollegeData = { setCollegeData }
              />
            </Route>
            <Route exact path="/details">
              <SideBar
                Page={Details}
                collegeData ={collegeData}
                setCollegeData = { setCollegeData }
              />
            </Route>
            
            <Route></Route>
          </Switch>
          {/* </Grid> */}
        </Container>
      </Grow>
    </Router>
  );
};

export default App;
