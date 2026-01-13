import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const navLinks = (
        <>
            <Link to="/" onClick={() => setOpen(false)}>
                <span className="nav-link">Home</span>
            </Link>
            <Link to="/dashboard" onClick={() => setOpen(false)}>
                <span className="nav-link">Dashboard</span>
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
                <span className="nav-link">About</span>
            </Link>

            {user && (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-sm font-bold">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                    </div>

                    <span className="text-sm text-white/80">
                        {user.name || user.email}
                    </span>

                    <button className="cursor-pointer" onClick={handleLogout}>
                        <span className="text-white/80 hover:text-red-500 transition">
                            <FaPowerOff className="w-4 h-4" />
                        </span>
                    </button>
                </div>
            )}
        </>
    );

    return (
        <>
            {/* ===== Desktop Navbar ===== */}
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-40
        hidden md:flex items-center gap-8 px-8 py-3
        rounded-full backdrop-blur-xl
        bg-white/10 border border-white/20 shadow-lg"
            >
                <span className="font-extrabold text-lg text-white tracking-wide">
                    🧠 MindTrace
                </span>

                {navLinks}
            </motion.nav>

            {/* ===== Mobile Navbar ===== */}
            <motion.div
                className="fixed top-4 left-1/2 -translate-x-1/2 z-40
        md:hidden w-[90%] px-5 py-3 rounded-2xl
        backdrop-blur-xl bg-white/10 border border-white/20"
            >
                <div className="flex justify-between items-center">
                    <span className="font-extrabold text-lg text-white">
                        🧠 MindTrace
                    </span>

                    {/* Hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-white text-2xl"
                    >
                        {open ? "✕" : "☰"}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-4 mt-4"
                        >
                            {navLinks}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export default Navbar;
