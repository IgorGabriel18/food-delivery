import { Routes, Route } from "react-router-dom";

import { pages } from "~utils/constants";

export function Router() {
    return (
        <Routes>
            {pages.map((item, index) => (
                <Route key={index} path={item.path} element={item.element} />
            ))}
        </Routes>
    );
}
