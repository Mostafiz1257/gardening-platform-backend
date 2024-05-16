import { Student } from './student.interface';
import { studentModel } from './student.model';

//create student
const createStudentToDb = async (student: Student) => {
  const result = await studentModel.create(student);

  return result;
};

//get all student
const getAllStudentFromDB = async () => {
  const result = await studentModel.find();
  return result;
};
//get single student
const getSingleStudentFromDB = async (id: string) => {
  const result = await studentModel.findOne({ id });
  return result;
};
export const studentServices = {
  createStudentToDb,
  getAllStudentFromDB,
  getSingleStudentFromDB,
};
