import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans, { loader as vansLoader } from "./pages/vans/Vans"
import VanDetail from "./pages/vans/VanDetail"
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import HostVanInfo from "./components/hostVanDetail/HostVanInfo";
import HostVanPricing from "./components/hostVanDetail/HostVanPricing";
import HostVanPhotos from "./components/hostVanDetail/HostVanPhotos";
import NotFound from "./components/notFound/NotFound";
import Layout from "./components/Layout"
import HostLayout from "./components/host/HostLayout";


import HostDashboard from "./pages/host/HostDashboard";
import HostIncome from "./pages/host/HostIncome";
import HostReviews from "./pages/host/HostReviews";
import Error from "./components/error/Error";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans"
               element={<Vans />}
               loader={vansLoader}
               errorElement={<Error/>}
        />
        <Route path="vans/:id" element={<VanDetail />} />

        <Route path="host" element={<HostLayout />}>
            <Route index element={<HostDashboard />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="reviews" element={<HostReviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
            </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);