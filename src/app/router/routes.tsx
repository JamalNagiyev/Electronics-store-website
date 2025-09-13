import { lazy } from "react"
import type { RouteObject } from "react-router"
import MainLayout from "../layouts/MainLayout"
import AboutPage from "@/pages/About/ui/AboutPage";


const HomePage = lazy(() => import("@/pages/HomePage/ui/HomePage"))

export const routes: RouteObject[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <HomePage />
                ),
            },
            {
                path: "/about",
                element: (
                    <AboutPage />
                ),
            }
        ],
    }
];