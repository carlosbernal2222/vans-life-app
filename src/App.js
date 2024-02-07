// import React from 'react';
// import "./App.css"
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Vans from "./pages/vans/Vans"
// import VanDetail from "./pages/vans/VanDetail";
// import Layout from "./components/Layout"
// import HostDashboard from "./pages/host/HostDashboard";
// import HostIncome from "./pages/host/HostIncome";
// import HostReviews from "./pages/host/HostReviews";
// import HostLayout from "./components/host/HostLayout";
// import HostVans from "./pages/host/HostVans";
// import HostVanDetail from "./pages/host/HostVanDetail";
// import HostVanInfo from "./components/hostVanDetail/HostVanInfo";
// import HostVanPricing from "./components/hostVanDetail/HostVanPricing";
// import HostVanPhotos from "./components/hostVanDetail/HostVanPhotos";
// import NotFound from "./components/notFound/NotFound";
//
//
// function App() {
//     return (
//         <div className="App">
//             <Routes>
//                 {/* Main Routes */}
//                 <Route path="/" element={<Layout/>}>
//                     <Route index element={<Home/>}/>
//                     <Route path="about" element={<About/>}/>
//                     <Route path="vans" element={<Vans/>} />
//                     <Route path="vans/:id" element={<VanDetail/>}/>
//
//                     {/* Host Routes */}
//                     <Route path="host" element={<HostLayout/>}>
//                         <Route index element={<HostDashboard/>}/>
//                         <Route path="income" element={<HostIncome/>}/>
//                         <Route path="reviews" element={<HostReviews/>}/>
//                         <Route path="vans/" element={<HostVans/>}/>
//
//                         {/* Host Van Detail Routes */}
//                         <Route path="vans/:id" element={<HostVanDetail/>}>
//                             <Route index element={<HostVanInfo/>}/>
//                             <Route path="pricing" element={<HostVanPricing/>}/>
//                             <Route path="photos" element={<HostVanPhotos/>}/>
//                         </Route>
//                     </Route>
//                     <Route path="*" element={<NotFound/>}/>
//                 </Route>
//             </Routes>
//         </div>
//     );
// }
//
// export default App;
