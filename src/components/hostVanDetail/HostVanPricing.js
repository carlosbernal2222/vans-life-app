import React from "react";
import {useOutletContext} from "react-router-dom";

const HostVanPricing = () => {

    const [currentVan] = useOutletContext()

    return(
        <div>
            <p>${currentVan.price}/day</p>
        </div>
    )
}

export default HostVanPricing;