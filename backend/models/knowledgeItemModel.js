import mongoose from "mongoose";

var knowledgeItemSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true
    },

    title: {
      type: String,
      required: true,
    },

    category: {
      type: String,
    },

    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true
    },

    baseStrength: {
      type: Number,
      required: true,
      min: 0,
      max: 100
    },

    lastRevisedAt: {
      type: Date,
      required: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

const knowledgeItemModel = mongoose.models.knowledgeitem || mongoose.model("knowledgeitem", knowledgeItemSchema);
export default knowledgeItemModel;