import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DecayChart from "./DecayChart";
import api from "../services/api";

const KnowledgeDetails = ({ knowledge, onClose, onRevise }) => {

    return (
        <motion.div
            layoutId={knowledge._id}
            className=" fixed inset-0 z-50 m-auto max-w-3xl h-[80vh] rounded-3xl p-8 bg-linear-to-br from-indigo-600 to-green-500 backdrop-blur-xl text-white overflow-y-auto max-sm:mx-5 "
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-xl cursor-pointer"
            >
                ✕
            </button>

            <h2 className="text-3xl font-extrabold mb-2">{knowledge.title}</h2>

            <p className="opacity-70 mb-6 capitalize">
                {knowledge.category} • {knowledge.difficulty}
            </p>

            <p className="mb-4">
                Current Strength: {knowledge.currentStrength}%
            </p>

            <DecayChart data={knowledge.decayTimeline} />
            <button
                onClick={onRevise}
                className="mt-4 w-full bg-white text-black font-semibold py-2 rounded-lg
                   text-sm active:scale-95 transition cursor-pointer"
            >
                Revise
            </button>
        </motion.div>
    );
};

export default KnowledgeDetails;
