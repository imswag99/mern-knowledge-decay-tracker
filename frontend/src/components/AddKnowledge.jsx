import React, { useState } from "react";
import { motion } from "framer-motion";

const AddKnowledge = ({ open, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("medium");
    const [baseStrength, setBaseStrength] = useState(70);
    const [loading, setLoading] = useState(false);

    if (!open) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            onSubmit({
                title,
                category,
                difficulty,
                baseStrength: Number(baseStrength),
            });
            setLoading(true);
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }

        // reset form
        setTitle("");
        setCategory("");
        setDifficulty("medium");
        setBaseStrength(70);
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/90 flex justify-center items-end sm:items-center">
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl mx-auto p-8
        rounded-3xl bg-white/10 backdrop-blur-xl
        border border-white/20 shadow-2xl text-white"
            >
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                    Add Knowledge 🧠
                </h2>

                {/* Title */}
                <div className="relative mb-5">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(() => e.target.value)}
                        placeholder="Title"
                        required
                        className="w-full px-4 py-4 rounded-xl
            bg-white/10 text-white border border-white/20
            outline-none focus:border-indigo-400 transition"
                    />
                </div>

                {/* Category */}
                <div className="relative mb-5">
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(() => e.target.value)}
                        placeholder="Category"
                        required
                        className="w-full px-4 py-4 rounded-xl
            bg-white/10 text-white border border-white/20
            outline-none focus:border-indigo-400 transition"
                    />
                </div>

                {/* Difficulty */}
                <div className="mb-6">
                    <label className="block mb-2 text-sm text-white/70">
                        Difficulty
                    </label>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(() => e.target.value)}
                        className="w-full px-4 py-3 rounded-xl
            bg-white/10 border border-white/20
            text-white outline-none"
                    >
                        <option className="bg-black" value="easy">
                            Easy
                        </option>
                        <option className="bg-black" value="medium">
                            Medium
                        </option>
                        <option className="bg-black" value="hard">
                            Hard
                        </option>
                    </select>
                </div>

                {/* Base Strength */}
                <div className="mb-8">
                    <label className="block mb-2 text-sm text-white/70">
                        Base Strength: {baseStrength}%
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={baseStrength}
                        onChange={(e) => setBaseStrength(() => e.target.value)}
                        className="w-full accent-indigo-400"
                    />
                </div>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-semibold
          bg-linear-to-r from-indigo-500 to-purple-600
          shadow-lg disabled:opacity-50 cursor-pointer"
                >
                    {loading ? "Saving..." : "Save Knowledge"}
                </motion.button>
                <button onClick={onClose} className="w-full py-3 rounded-xl font-semibold border-indigo-500 border-3 text-indigo-500 bg-transparent disabled:opacity-50 cursor-pointer mt-5">
                    Cancel
                </button>
            </motion.form>
        </div>
    );
};

export default AddKnowledge;
