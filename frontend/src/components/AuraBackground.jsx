import React from "react";
import Stars from "./Stars";

const AuraBackground = ({ children }) => {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black">
            <Stars />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default AuraBackground;
