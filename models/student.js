import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
   
    name: String,
    yearOfBatch: {
        type: Date,
    },
    collegeId: { type: mongoose.Schema.ObjectId },
    
    skills: [String],
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Student = mongoose.model('student', studentSchema);

export default Student;