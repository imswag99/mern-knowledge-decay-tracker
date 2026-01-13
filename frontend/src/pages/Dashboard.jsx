import React from "react";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import EmptyState from "../components/EmptyState";
import AddKnowledge from "../components/AddKnowledge";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import KnowledgeGrid from "../components/KnowledgeGrid";
import KnowledgeDetails from "../components/KnowledgeDetails";
import { motion } from "framer-motion";
import AuraBackground from "../components/AuraBackground";
import DashboardLoader from "../components/DashboardLoader";


const Dashboard = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeId, setActiveId] = useState(null);
    const activeKnowledge = data.find((k) => k._id === activeId)

    const handleRevise = async () => {
        await api.patch(`/knowledge/${activeId}/revise`);
        fetchKnowledge();
    };

    const fetchKnowledge = async () => {
        try {
            setLoading(true);
            const res = await api.get("/knowledge");
            setData(res.data.data);
        } catch (err) {
            console.error(res.data.message, err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchKnowledge(); // called on page load
    }, []);

    const addKnowledge = async ({
        title,
        category,
        difficulty,
        baseStrength,
    }) => {
        try {
            await api.post("/knowledge/add", {
                title,
                category,
                difficulty,
                baseStrength,
            });

            setOpen(false);
            fetchKnowledge(); // refresh list
        } catch (err) {
            console.error("Failed to add knowledge", err);
        }
    };


    return (
        <AuraBackground>
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-40 mb-20 max-sm:mt-30">
                {loading ? (
                    <DashboardLoader />
                ) : data.length === 0 ? (
                    <EmptyState onAdd={() => setOpen(true)} />
                ) : (
                    <LayoutGroup>
                        <div className="mb-8">
                            <button
                                onClick={() => setOpen(true)}
                                className="bg-indigo-400 text-white px-6 py-2 rounded-lg cursor-pointer"
                            >
                                Add Knowledge
                            </button>
                        </div>
                        <KnowledgeGrid items={data} setActiveId={setActiveId} />
                        <AnimatePresence>
                            {activeKnowledge && (
                                <>
                                    <motion.div
                                        className="fixed inset-0 bg-black z-40"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 0.6 }}
                                        exit={{ opacity: 0 }}
                                        onClick={() => setActiveId(null)}
                                    />

                                    <KnowledgeDetails
                                        knowledge={activeKnowledge}
                                        onClose={() => setActiveId(null)}
                                        onRevise={handleRevise}
                                    />
                                </>
                            )}
                        </AnimatePresence>
                    </LayoutGroup>
                )}
            </div>

            <AddKnowledge
                open={open}
                onClose={() => setOpen(false)}
                onSubmit={addKnowledge}
            />
        </AuraBackground>
    );
};

export default Dashboard;
