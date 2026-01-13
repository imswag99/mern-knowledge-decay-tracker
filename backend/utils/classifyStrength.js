const classifyStrength = (strength) => {
  if (strength <= 30) return "critical";
  if (strength <= 50) return "weak";
  if (strength <= 70) return "stable";
  return "strong";
};


export default classifyStrength;