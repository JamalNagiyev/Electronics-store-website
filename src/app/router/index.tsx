import { useRoutes } from "react-router";
import { routes } from "./routes";
import { Suspense } from "react";


export default function AppRouter() {
    const routing = useRoutes(routes);

    return(
        <Suspense fallback={<div className="">Loading...</div>}>
            {routing}
        </Suspense>
    );
}