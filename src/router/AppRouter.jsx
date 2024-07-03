import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="marvel" element={ <MarvelPage /> } />
                <Route path="dc" element={ <DcPage /> } />
                <Route path="/*" element={ <Navigate to="/marvel" /> } />
            </Routes>
        </>
    );
}
