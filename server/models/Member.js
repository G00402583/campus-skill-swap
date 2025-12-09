import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true },
    courseName: { type: String, required: true },
    studyYear: { type: Number, required: true },
    bioText: { type: String },
    skills: [{ type: String }],
  },
  { timestamps: true }
);

const Member = mongoose.model("Member", memberSchema);

export default Member;
