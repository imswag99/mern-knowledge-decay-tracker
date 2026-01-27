import knowledgeItemModel from "../models/knowledgeItemModel.js";
import {
    calculateCurrentStrength,
    generateDecayTimeline,
} from "../services/decay.service.js";
import classifyStrength from "../utils/classifyStrength.js";

export const addKnowledge = async (req, res) => {
    try {
        const { title, category, difficulty, baseStrength } = req.body;

        const knowledge = await knowledgeItemModel.create({
            userId: req.user.id,
            title,
            category,
            difficulty,
            baseStrength,
            lastRevisedAt: new Date(),
        });

        res.json({
            success: true,
            message: "Added new topic successfully",
            knowledge,
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to add knowledge" });
    }
};

export const getAllKnowledge = async (req, res) => {
    try {
        const items = await knowledgeItemModel.find({ userId: req.user.id });

        const enrichedItems = items.map((item) => {
            const currentStrength = calculateCurrentStrength(item);
            const decayTimeline = generateDecayTimeline(item, 30);
            const status = classifyStrength(currentStrength);

            return {
                ...item.toObject(),
                currentStrength,
                decayTimeline,
                status: status,
            };
        });

        res.json({
            success: true,
            message: "Fetched all knowledge",
            data: enrichedItems,
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Failed to fetch knowledge" });
    }
};

export const reviseKnowledge = async (req, res) => {
    try {
        const item = await knowledgeItemModel.findOne({
            _id: req.params.id,
            userId: req.user.id,
        });

        if (!item) {
            return res.json({
                success: false,
                message: "Topic not found",
            });
        }

        // 1. Get the real current strength (after decay)
        const currentStrength = calculateCurrentStrength(item);

        // 2. Apply reinforcement
        const boostedStrength = Math.min(currentStrength + 20, 100);

        // 3. Store as new base
        item.baseStrength = boostedStrength;
        item.lastRevisedAt = new Date();

        await item.save();

        res.json({
            success: true,
            data: {
                ...item.toObject(),
                currentStrength: boostedStrength,
            },
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Failed to revise topic",
        });
    }
};
