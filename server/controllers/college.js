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
      return res.status(209).json({result:"empty college", isEmpty:true});
    } else res.status(200).json({result:Colleges, isEmpty:false});
  } catch (error) {
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
          noOfStudents: faker.random.number(10045),
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
