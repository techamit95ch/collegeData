import express from "express";
import mongoose from "mongoose";
import faker from "faker";

import Student from "../models/student.js";
import College from "../models/college.js";

// const router = express.Router();
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (students.length === 0) {
      console.log("empty college");
      return res.status(209).json({result:"empty Students", isEmpty:true});
    } else res.status(200).json({result:students, isEmpty:false});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const createStudent = async (req, res) => {
  try {
    const students = await Student.find();
    let counter = 0;
    if (students.length >= 100) {
      console.log("Already Exists", students.length);
      return res
        .status(201)
        .json({ "Already Exists data length:": students.length });
    } else {
      const colleges = await College.find({}, { _id: 1 });
      // console.log(colleges);
      let collegeId = "";

      if (colleges.length === 0) {
        console.log("empty college");
        return res.status(409).json("empty college");
      }

      for (let i = 0; i < 100 - students.length; i++) {
        let skills = [];
        for (let j = 0; j < Math.floor(Math.random() * 20 + 10); j++) {
          skills.push(faker.hacker.noun());
        }

        collegeId = colleges[Math.floor(Math.random() * colleges.length)];

        const newStudent = new Student({
          name: faker.name.findName(),
          yearOfBatch: faker.date.past(4),
          collegeId: collegeId,         
          skills: skills,
        });

        try {
          await newStudent.save();
          const coll = await College.findById(collegeId);
          await College.findByIdAndUpdate(collegeId, {noOfStudents : coll.noOfStudents + 1 },{new:true})
          counter++;
        } catch (error) {
          res.status(409).json({ message: error.message });
        }
      }
      res.status(201).json({ "saved data counter:": counter });
    }
  } catch (error) {
    console.log(error.message);
  }
};
