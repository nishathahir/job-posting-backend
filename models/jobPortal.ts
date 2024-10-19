import mongoose from "mongoose";

const JobPostingSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  experienceLevel: { type: String, required: true },
  candidates: { type: [String], required: true },
  endDate: { type: Date, required: true },
});

export const JobPosting = mongoose.model("JobPosting", JobPostingSchema);
