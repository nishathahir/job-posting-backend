import { Router } from "express";
import { sendInterviewDetails } from "../controllers/jobPortalController"; // Make sure the path is correct

const router = Router();

// Define the route and attach the controller
router.post("/interviews", sendInterviewDetails);

export default router;
