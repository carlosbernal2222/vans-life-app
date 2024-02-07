import React from "react";
import api from '../../api/axiosConfig'
import "./HostVans.css"
import { Link } from "react-router-dom";

const HostVans = () => {
    // State to hold the list of vans
    const [vans, setVans] = React.useState([]);

    // Function to fetch the list of vans
    const getVans = async () => {
        try {
            const response = await api.get('api/host/1/vans');
            console.log(response.data);
            setVans(response.data);

            // Store the van list in local storage
            localStorage.setItem('hostVans', JSON.stringify(response.data));
        } catch (err) {
            console.log(err);
        }
    }

    // Function to get van list from local storage
    const getCachedVans = () => {
        const cachedVans = localStorage.getItem('hostVans');
        if (cachedVans) {
            setVans(JSON.parse(cachedVans));
        }
    };

    // Fetch the van list when the component mounts
    React.useEffect(() => {
        // Try to get the van list from local storage first
        getCachedVans();

        // If not found in local storage, fetch from the API
        if (vans.length === 0) {
            getCachedVans();
        }
    }, [vans.length]);

    // Map vans to React elements
    const hostVansEls = vans.map(van => (
        <Link
            to={`${van.id}`}

            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imgUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ));

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>
                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}

export default HostVans;
