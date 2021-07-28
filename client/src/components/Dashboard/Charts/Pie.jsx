import React, { useState, useEffect } from "react";
import { Pie } from "@ant-design/charts";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom"; // version 5.2.0
import CircularProgress from "@material-ui/core/CircularProgress";
import { getCollegesByState } from "../../../actions/data";

const DemoPie = ({ filterBy ,collegeData, setCollegeData }) => {
  const history = useHistory();

  const PlotMaps = {};
  let PreTooltipData;
  const colleges = useSelector((state) => state.colleges);
  const courses = useSelector((state) => state.courseWise);
  var data =filterBy === "state" ? colleges : courses;
  // console.log(data);
  var config = {
    appendPadding: 10,
    data: data,
    angleField: "count",
    colorField: filterBy === "state" ? "state" : "course",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
    
    statistic: {
      title: "false",
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: filterBy.toUpperCase(),
      },
    },
  };
  if (colleges.length === 0) {
    return (
      <CircularProgress
        disableShrink
        size={40}
        thickness={4}
        variant="indeterminate"
      />
    );
  }
  return (
    <Pie
      {...config}
      onReady={(plot) => {
        plot.on("plot:click", (evt) => {
          const { x, y } = evt;
          // const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
          // console.log(tooltipData[0].data.data);
          setCollegeData(tooltipData[0].data);
          // history.push('/details')
        }
        );
      }}
    />
  );
};

export default DemoPie;
