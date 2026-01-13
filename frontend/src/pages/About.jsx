import React from "react";
import { motion } from "framer-motion";
import AuraBackground from "../components/AuraBackground";
import Navbar from "../components/Navbar";

const features = [
    {
        title: "Knowledge Decay Awareness",
        desc: "Visualize how your knowledge fades over time using intelligent decay models.",
    },
    {
        title: "Active Recall System",
        desc: "Revise only when it matters — right before forgetting begins.",
    },
    {
        title: "Learning, Quantified",
        desc: "Turn learning into data. Strength, decay curves, and progress — all tracked.",
    },
];

const About = () => {
    return (
        <AuraBackground>
            <Navbar />
            <section
                id="about"
                className="relative py-32 px-6 max-w-6xl mx-auto text-white"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl font-extrabold text-center mb-12"
                >
                    Why MindTrace?
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl
                       border border-white/20 shadow-xl"
                        >
                            <h3 className="text-xl font-bold mb-3">
                                {f.title}
                            </h3>
                            <p className="text-white/70 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </AuraBackground>
    );
};

export default About;
