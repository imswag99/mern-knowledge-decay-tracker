import React from "react";
import { motion } from "framer-motion";

const StrengthBar = ({ value }) => {
    return (
        <div className="w-full h-2 bg-zinc-200 rounded-full overflow-hidden">
            <motion.div
                className="h-full bg-indigo-400"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5 }}
            />
        </div>
    );
};

export default StrengthBar;
