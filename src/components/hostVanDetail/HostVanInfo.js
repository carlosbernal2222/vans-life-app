import React from "react";
import {useOutletContext} from "react-router-dom"

const HostVanInfo = () => {

    const [currentVan] = useOutletContext();

    return(
        <div>
            <p><b>Name:</b> {currentVan.name}</p>
            <p><b>Category:</b> {currentVan.type}</p>
            <p><b>Description:</b> {currentVan.description}</p>
            <p><b>Visibility:</b>  Public</p>
        </div>
    )
}

export default HostVanInfo