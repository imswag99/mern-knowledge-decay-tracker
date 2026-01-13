import React, { memo } from "react";
import { motion } from "framer-motion";

const Stars = () => {
    const stars = Array.from({ length: 80 });

    return (
        <div className="absolute inset-0">
            {stars.map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-70"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                    }}
                    transition={{
                        duration: 1 + Math.random() * 4,
                        repeat: Infinity,
                    }}
                />
            ))}
        </div>
    );
};

export default memo(Stars);
