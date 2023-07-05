import mongoose from "mongoose";
import studentModel from "./models/student.js";
import courseModel from "./models/course.js";

const environment = async () => {
  await mongoose.connect(
    "mongodb+srv://diegojofre:coder@cluster0.u24cdbg.mongodb.net/?retryWrites=true&w=majority"
  );

  let student = await studentModel.find({ _id: "64a4b082d27b539380017191" });
  console.log(JSON.stringify(student, null, "\t"));
  // student.courses.push({ course: "64a4a99847387e75ef9b97d1" });
  // await studentModel.findByIdAndUpdate("64a4b082d27b539380017191", student);

  // await studentModel.create({
  //   first_name: "Pepa",
  //   last_name: "Sand",
  //   email: "pepa@mail",
  //   gender: "Female",
  // });

  // await courseModel.create({
  //   title: "Backend",
  //   description: "Curso de Nodejs",
  //   professor: "Diego",
  // });
};

environment();
