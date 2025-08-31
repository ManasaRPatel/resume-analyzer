const skillKeywords = [
  "java","python","javascript","node.js","express","sql","mongodb",
  "react","c++","c","machine learning","deep learning","nlp",
  "html","css","git","docker","kubernetes","aws","azure","linux"
];

function matchResume(resumeText, jobDescription) {
  const resume = resumeText.toLowerCase();
  const jd = jobDescription.toLowerCase();

  const matchedSkills = skillKeywords.filter(skill => resume.includes(skill) && jd.includes(skill));
  const missingSkills = skillKeywords.filter(skill => !resume.includes(skill) && jd.includes(skill));

  const matchPercentage = (matchedSkills.length + missingSkills.length) > 0
    ? ((matchedSkills.length / (matchedSkills.length + missingSkills.length)) * 100).toFixed(2)
    : 0;

  let recommendation = "Your resume is a good match!";
  if (matchPercentage < 50) {
    recommendation = "Consider adding more relevant skills mentioned in the job description.";
  } else if (matchPercentage < 80) {
    recommendation = "You are close! Add a few missing skills to strengthen your resume.";
  }

  return { matchedSkills, missingSkills, matchPercentage, recommendation };
}

module.exports = { matchResume };
