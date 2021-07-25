import express from 'express';

import { getColleges, createCollege } from '../controllers/college.js';
import { getStudents, createStudent } from '../controllers/student.js';

const router = express.Router();

router.get('/college', getColleges);
router.post('/college', createCollege);
router.get('/student', getStudents);
router.post('/student', createStudent);

export default router;