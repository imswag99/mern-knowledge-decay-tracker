// services/decay.service.js

const millisecondsPerDay = 1000 * 60 * 60 * 24;

const difficultyDecayMap = {
    easy: 0.02,
    medium: 0.05,
    hard: 0.08,
};

export const calculateCurrentStrength = (item) => {
    const { baseStrength, lastRevisedAt, difficulty } = item;

    // 1. Days since last revision
    const daysPassed =
        (Date.now() - new Date(lastRevisedAt)) / millisecondsPerDay;

    // 2. Decay rate from difficulty
    const decayRate = difficultyDecayMap[difficulty] || 0.05;

    // 3. Exponential decay formula
    const currentStrength = baseStrength * Math.exp(-decayRate * daysPassed);

    // 4. Clamp between 0 and 100
    return Math.max(0, Math.min(100, Math.round(currentStrength)));
};

export const generateDecayTimeline = (item, totalDays = 30) => {
    const { baseStrength, lastRevisedAt, difficulty } = item;

    const decayRate = difficultyDecayMap[difficulty] || 0.05;

    // Days passed since last revision
    const daysPassed =
        (Date.now() - new Date(lastRevisedAt)) / millisecondsPerDay;

    // Strength today
    const currentStrength = baseStrength * Math.exp(-decayRate * daysPassed);

    const timeline = [];

    for (let day = 0; day <= totalDays; day++) {
        const strength = currentStrength * Math.exp(-decayRate * day);

        timeline.push({
            day, // day 0 = today
            strength: Math.max(0, Math.round(strength)),
        });
    }

    return timeline;
};
