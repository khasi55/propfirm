"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

export default function SidebarWrapper() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />

            {/* Mobile Menu Trigger */}
            <button
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden absolute top-4 left-4 z-[101] p-2 text-gray-400 hover:text-white bg-black/50 rounded-lg backdrop-blur-sm shadow-lg border border-white/10"
            >
                <Menu size={24} />
            </button>
        </>
    );
}
