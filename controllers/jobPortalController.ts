import { Request, Response } from "express";

import { JobPosting } from "../models/jobPortal";
import transporter from "../config/emailConfig";

export const sendInterviewDetails = async (req: Request, res: Response) => {
  const { jobTitle, jobDescription, experienceLevel, candidates, endDate } =
    req.body;

  try {
    const jobPosting = new JobPosting({
      jobTitle,
      jobDescription,
      experienceLevel,
      candidates,
      endDate,
    });

    await jobPosting.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: candidates,
      subject: `Interview for ${jobTitle}`,
      html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0044cc; text-align: center;">Interview Invitation</h2>
            <p style="font-size: 16px;">Dear Candidate,</p>
            <p>We are pleased to inform you about an interview opportunity for the position of <strong>${jobTitle}</strong>. Please find the details below:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;"><strong>Job Title:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;"><strong>Job Description:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${jobDescription}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;"><strong>Experience Level:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${experienceLevel}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f4f4f4; border: 1px solid #ddd;"><strong>End Date:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${endDate}</td>
              </tr>
            </table>
            <p style="font-size: 16px;">We look forward to discussing your qualifications in detail.</p>
            <p style="font-size: 16px;">Best regards,<br><strong>The Hiring Team</strong></p>
        
          </div>
        `,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return res.status(500).json({ message: "Error sending email", error });
      }
      res.status(200).json({ message: "Email sent successfully", info });
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "Failed to save job posting or send email", error });
  }
};
