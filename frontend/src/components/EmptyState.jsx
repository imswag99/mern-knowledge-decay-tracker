import React from "react";
const EmptyState = ({ onAdd }) => {
    return (
        <div className="text-center py-24 px-4">
            <div className="text-6xl mb-4">📘</div>
            <p className="text-zinc-500 mb-6">
                Start by adding what you learned
            </p>
            <button
                onClick={onAdd}
                className="bg-linear-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-lg cursor-pointer"
            >
                Add Knowledge
            </button>
        </div>
    );
};

export default EmptyState;
