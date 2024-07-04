import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, MarvelPage, HeroPage, SearchPage } from "../pages";


export const HerosRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={ <MarvelPage /> } />
                    <Route path="dc" element={ <DcPage /> } />
                    // TODO: Search, Hero by id
                    <Route path="hero" element={ <HeroPage /> } />
                    <Route path="search" element={ <SearchPage /> } />
                    <Route path="/" element={ <Navigate to="marvel" /> } />
                </Routes>
            </div>
        </>
    );
}
