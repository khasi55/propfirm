"use client";

import { SocketProvider } from "@/contexts/SocketContext";
import { AccountProvider } from "@/contexts/AccountContext";
import { ToastProvider } from "@/contexts/ToastContext";
import SessionGuard from "@/components/auth/SessionGuard";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <SessionGuard>
            <SocketProvider>
                <AccountProvider>
                    <ToastProvider>
                        {children}
                    </ToastProvider>
                </AccountProvider>
            </SocketProvider>
        </SessionGuard>
    );
}
