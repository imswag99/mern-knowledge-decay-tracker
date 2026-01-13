import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuraBackground from "../components/AuraBackground";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Login = () => {
    const { register, loading } = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(form);
            navigate("/login");
        } catch {
            alert("Invalid credentials");
        }
    };

    return (
        <AuraBackground>
            <Navbar />
            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto p-8 mt-50 rounded-3xl
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-2xl text-white"
            >
                <h2 className="text-3xl font-extrabold mb-6 text-center">
                    Create Account ✨
                </h2>

                <div className="relative mb-5">
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Name"
                        className="w-full px-4 py-4 rounded-xl bg-white/10
          text-white border border-white/20 outline-none
          focus:border-indigo-400 transition"
                    />
                </div>

                <div className="relative mb-5">
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        placeholder="Email"
                        className="w-full px-4 py-4 rounded-xl bg-white/10
          text-white border border-white/20 outline-none
          focus:border-indigo-400 transition"
                    />
                </div>

                <div className="relative mb-5">
                    <input
                        type="password"
                        value={form.password}
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        placeholder="Password"
                        className="w-full px-4 py-4 rounded-xl bg-white/10
          text-white border border-white/20 outline-none
          focus:border-indigo-400 transition"
                    />
                </div>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    disabled={loading}
                    className="w-full py-3 rounded-xl font-semibold
          bg-linear-to-r from-indigo-500 to-purple-600 shadow-lg cursor-pointer"
                >
                    {loading ? "Registering..." : "Register"}
                </motion.button>
            </motion.form>
            <h1 className="mt-5 text-white text-center">
                Already have an account?{" "}
                <Link
                    className="text-indigo-400 font-semibold"
                    to={"/login"}
                >
                    Login here
                </Link>
            </h1>
        </AuraBackground>
    );
};

export default Login;
