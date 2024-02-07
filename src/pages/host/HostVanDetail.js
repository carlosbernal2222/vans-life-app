import React from "react";
import { Link, useParams, Outlet } from "react-router-dom";

import api from "../../api/axiosConfig";
import "./HostVanDetail.css";
import HostVanDetailHeader from "../../components/hostVanDetail/HostVanDetailHeader";

const HostVanDetail = () => {
    // Extracting parameters from the URL
    const params = useParams();
    // State to hold the current van details
    const [currentVan, setCurrentVan] = React.useState(null);

    // Function to fetch the details of the current van
    const getCurrentVan = async () => {
        try {
            const response = await api.get(`api/host/1/vans/${params.id}`);
            const vanData = response.data;
            setCurrentVan(vanData);

            // Store the van information in local storage
            localStorage.setItem(`van-${params.id}`, JSON.stringify(vanData));
        } catch (err) {
            console.log(err);
        }
    };

    // Function to get van details from local storage
    const getCachedVan = () => {
        const cachedVan = localStorage.getItem(`van-${params.id}`);
        if (cachedVan) {
            setCurrentVan(JSON.parse(cachedVan));
        }
    };

    // Fetch the van details when the component mounts or when params.id changes
    React.useEffect(() => {
        // Try to get the van details from local storage first
        getCachedVan();

        // If not found in local storage, fetch from the API
        if (!currentVan) {
            getCurrentVan();
        }
    }, [params.id]);

    // If van details are not available, show a loading message
    if (!currentVan) {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            {/* Link to navigate back to all vans */}
            <Link to=".." relative="path" className="back-button">
                &larr; <span>Back to all vans</span>
            </Link>

            {/* Container for the host van details */}
            <div className="host-van-detail-layout-container">
                {/* Display van image, type, name, and price */}
                <div className="host-van-detail">
                    <img src={currentVan.imgUrl} alt={currentVan.name} />
                    <div className="host-van-detail-info-text">
                        <i className={`van-type van-type-${currentVan.type}`}>
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>{currentVan.price}/day</h4>
                    </div>
                </div>

                {/* HostVanDetailHeader component for the navbar */}
                <HostVanDetailHeader classname="van-detail-navbar" />

                {/* Outlet to render nested routes within HostVanDetail */}
                <Outlet context={[currentVan, setCurrentVan]} />
            </div>
        </section>
    );
};

export default HostVanDetail;
