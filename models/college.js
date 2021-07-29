import mongoose from 'mongoose';

const collegeSchema = mongoose.Schema({
    
    name: String,
    yearFounded: {
        type: Date,
    },
    city: String,
    state: String,
    country: String,
    noOfStudents: {
        type: Number,
        default: 0,
    },
    courses: [String],
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const College = mongoose.model('college', collegeSchema);

export default College;