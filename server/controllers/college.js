import express from "express";
import mongoose from "mongoose";
import faker from "faker";

import College from "../models/college.js";

// const router = express.Router();
export const getColleges = async (req, res) => {
  try {
    const Colleges = await College.find();
    if (Colleges.length === 0) {
      console.log("empty college");
      return res.status(209).json({ result: "empty college", isEmpty: true });
    } else res.status(200).json({ result: Colleges, isEmpty: false });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCollegesState = async (req, res) => {
  try {
    const Colleges = await College.find();
    if (Colleges.length === 0) {
      console.log("empty college");
      return res.status(209).json({ result: "empty college", isEmpty: true });
    } else {
      let data = [
        {
          state: Colleges[0].state,
          data: [Colleges[0]],
          count: 1,
        },
      ];

      for (let i = 1; i < Colleges.length; i++) {
        let indx = null;
        let exists = data.some(({ state }, index) => {
          indx = index;

          return state === Colleges[i].state;
        });
        if (exists) {
          data[indx].data.push(Colleges[i]);
          data[indx].count++;
        } else {
          if (Colleges.noOfStudents !== 0)
            data.push({
              state: Colleges[i].state,
              data: [Colleges[i]],
              count: 1,
            });
        }
      }
      res.status(200).json({ result: data, isEmpty: false });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getCollegesCourse = async (req, res) => {
  try {
    const colleges = await College.find();
    if (colleges.length === 0) {
      console.log("empty college");
      return res.status(209).json({ result: "empty college", isEmpty: true });
    } else {
      let course = [];

      for (let i = 0; i < colleges.length; i++) {
        for (let j = 0; j < colleges[i].courses.length; j++) {
          if (!course.includes(colleges[i].courses[j])) {
            course.push(colleges[i].courses[j]);
          }
        }
      }
      // course = new Set(course);
      let data = [];
      for (let i = 0; i < course.length; i++) {
        for (let j = 0; j < colleges.length; j++) {
          let ind = null;
          if (colleges[j].courses.includes(course[i])) {
            let exists = data.some(function (item, index) {
              ind = index;
              return item.course === course[i];
            });
            // console.log(exists);
            if (data.length === 0) {
              data.push({
                course: course[i],
                data: [colleges[j]],
                count: 1,
                // _id: colleges[j]._id
              });
            } else {
              // exists= exists[0];
              // console.log(exists);
              if (exists) {
                data[ind].data.push(colleges[j]);
                data[ind].count++;
              }
              if (!exists) {
                if (colleges.noOfStudents !== 0)
                  data.push({
                    course: course[i],
                    data: [colleges[j]],
                    count: 1,
                    // _id: colleges[j]._id
                  });
              }
            }
          }
        }
      }

      res.status(200).json({ result: data, isEmpty: false });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: error.message });
  }
};
export const createCollege = async (req, res) => {
  try {
    let counter = 0;
    const colleges = await College.find();
    if (colleges.length >= 100) {
      console.log("Already Exists", colleges.length);
      return res
        .status(201)
        .json({ "Already Exists data length:": colleges.length });
    } else {
      for (let i = 0; i < 100 - colleges.length; i++) {
        let courses = [];
        for (let j = 0; j < Math.floor(Math.random() * 40 + 10); j++) {
          courses.push(faker.hacker.noun());
        }
        const newCollege = new College({
          name: faker.company.companyName(),
          yearFounded: faker.date.past(10),
          city: faker.address.city(),
          state: faker.address.state(),
          country: faker.address.country(),
          noOfStudents: 0,
          courses: courses,
        });

        try {
          await newCollege.save();
          counter++;
          // res.status(201).json(newCollege);
        } catch (error) {
          console.log(error.message);
          // res.status(409).json({ message: error.message });
        }
      }
      res.status(201).json({ "saved data counter:": counter });
    }
  } catch (error) {
    console.error(error);
    res.status(409).json({ message: error.message });
  }
};
