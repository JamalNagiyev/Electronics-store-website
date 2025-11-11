import { lazy } from "react"
import type { RouteObject } from "react-router"
import MainLayout from "../layouts/MainLayout"

const HomePage = lazy(() => import("@/pages/HomePage/ui/HomePage"))
const AboutPage = lazy(() => import("@/pages/AboutPage/ui/AboutPage"))
const ShopPage = lazy(() => import("@/pages/ShopPage/ui/ShopPage"))

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
            },
            {
                path: "/shop",
                element: (
                    <ShopPage />
                ),
            }
        ],
    }
];