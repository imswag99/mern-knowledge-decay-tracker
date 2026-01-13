import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import AuraBackground from "../components/AuraBackground";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <AuraBackground>
            <div className="text-white">
                <Navbar />

                {/* HERO */}
                <section className="min-h-screen flex items-center justify-center px-6 max-sm:mt-20 max-sm:mb-10 max-md:mt-20 max-md:mb-10 ">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-6xl font-extrabold leading-tight mb-6">
                                Track.
                                <span className="text-indigo-400">
                                    {" "}
                                    Remember.
                                </span>
                                <br />
                                Never Forget.
                            </h1>

                            <p className="text-white/70 text-lg mb-8">
                                MindTrace helps you understand how knowledge
                                decays — and when to revise, so learning
                                actually sticks.
                            </p>

                            <motion.div whileHover={{ scale: 1.05 }}>
                                <Link
                                    to={"/dashboard"}
                                    className="inline-block px-8 py-4 rounded-xl
                         bg-linear-to-r from-indigo-500 to-purple-600
                         font-semibold shadow-lg"
                                >
                                    Start Tracking Knowledge
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Image */}
                        <motion.img
                            src="/brain-hero.png"
                            alt="Brain Visualization"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="w-full max-w-md mx-auto drop-shadow-2xl"
                        />
                    </div>
                </section>
            </div>
        </AuraBackground>
    );
};

export default Home;
