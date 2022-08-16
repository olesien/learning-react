import React from "react";
import { motion } from "framer-motion";

export default function PageTransition({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, backgroundColor: "#000" }}
            animate={{
                opacity: 1,
                backgroundColor: "#FFF",
                transition: { duration: "1" },
            }}
        >
            {children}
        </motion.div>
    );
}
