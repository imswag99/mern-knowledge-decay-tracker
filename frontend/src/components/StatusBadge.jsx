import React from "react";

const styles = {
    critical: "bg-rose-100 text-rose-700",
    weak: "bg-amber-100 text-amber-700",
    stable: "bg-sky-100 text-sky-700",
    strong: "bg-emerald-100 text-emerald-700",
};

const StatusBadge = ({ status }) => {
    return (
        <span className={`px-2.5 py-1 rounded-full text-xs ${styles[status]}`}>
            {status}
        </span>
    );
};

export default StatusBadge;
