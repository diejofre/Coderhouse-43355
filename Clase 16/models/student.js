import mongoose from "mongoose";

const studentCollection = "student";

const StudentSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    unique: true,
  },
  gender: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      },
    ],
    default: [],
  },
});

StudentSchema.pre("find", function () {
  this.populate("courses.course");
});

const studentModel = mongoose.model(studentCollection, StudentSchema);
export default studentModel;
