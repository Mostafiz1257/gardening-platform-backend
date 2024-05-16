import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String },
  fatherContact: { type: String, required: true },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContact: { type: String },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contract: { type: String },
});
const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  gender: ['male', 'female'],
  dateOfBirth: { type: String, required: true },
  contractNo: { type: String, required: true },
  email: { type: String, required: true },
  bloodGroup: ['A+', 'B+', 'O+', 'O-', 'AB-', 'AB+'],
  profileImg: { type: String },
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  isActive: ['active', 'blocked'],
});

//model

export const studentModel = model<Student>('student', studentSchema);
