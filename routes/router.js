import express from 'express';

import { getColleges, createCollege,getCollegesState,getCollegesCourse } from '../controllers/college.js';
import { getStudents, createStudent } from '../controllers/student.js';

const router = express.Router();

router.get('/college', getColleges);
router.get('/college/state', getCollegesState);
router.get('/college/course', getCollegesCourse);
router.post('/college', createCollege);
router.get('/student', getStudents);
router.post('/student', createStudent);

export default router;