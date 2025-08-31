const express = require("express");
const { matchResume } = require("../utils/matcher");

const router = express.Router();

// POST /analyze
router.post("/analyze", (req, res) => {
  const { resumeText, jobDescription } = req.body;

  if (!resumeText || !jobDescription) {
    return res.status(400).json({ error: "Both resumeText and jobDescription are required" });
  }

  const result = matchResume(resumeText, jobDescription);
  res.json(result);
});

module.exports = router;
