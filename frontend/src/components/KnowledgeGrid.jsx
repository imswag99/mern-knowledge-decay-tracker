import React from "react";
import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";
import StrengthBar from "./StrengthBar";

const KnowledgeGrid = ({ items, setActiveId }) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((knowledge) => (
                <motion.li
                    key={knowledge._id}
                    layoutId={knowledge._id}
                    onClick={() => setActiveId(knowledge._id)}
                    className=" relative cursor-pointer rounded-3xl p-6 text-white bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-lg shadow-[#1a1a1a] hover:scale-105 transition-scale duration-100"
                >
                    <div className="flex justify-between mb-2">
                        <h3 className="font-medium text-sm sm:text-base">
                            {knowledge.title}
                        </h3>
                        <StatusBadge status={knowledge.status} />
                    </div>
                    <p className="text-sm opacity-80">{knowledge.category}</p>
                    <p className="my-2">
                      🧠 Strength: {knowledge.currentStrength}%
                    </p>
                    <StrengthBar value={knowledge.currentStrength} />
                </motion.li>
            ))}
        </ul>
    );
};

export default KnowledgeGrid;
