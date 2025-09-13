import Navbar from "@/widgets/Navbar/ui/Navbar";
import { Outlet } from "react-router";


export default function MainLayout() {
    return (
        <>
            <div>
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
}