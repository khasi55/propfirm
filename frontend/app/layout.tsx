import "./globals.css";
import SidebarWrapper from "@/components/layout/SidebarWrapper";
import { Providers } from "./Providers";

export const metadata = {
    title: "Demo Funded",
    description: "Trading Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <div className="flex h-screen overflow-hidden bg-[#FFFFFF] relative">
                        <SidebarWrapper />

                        <div className="flex-1 flex flex-col h-full relative w-full bg-[#EDF6FE] md:rounded-3xl md:my-4 md:mr-4 overflow-hidden">
                            <main className="flex-1 overflow-y-auto w-full relative">
                                {children}
                            </main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
