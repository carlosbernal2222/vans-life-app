import React from "react";
import "../../pages/host/HostVanDetail.css"
import {NavLink} from "react-router-dom";
const HostVanDetailHeader = () =>{

    return(
        <header>
            <nav>
                <NavLink
                    to="."
                    className={({isActive})=> isActive ? "active-link" : null}
                    end
                >
                    Details
                </NavLink>
                <NavLink
                    to="pricing"
                    className={({isActive})=> isActive ? "active-link" : null}
                >
                    Pricing
                </NavLink>
                <NavLink
                    to="photos"
                    className={({isActive})=> isActive ? "active-link" : null}
                >
                    Photos
                </NavLink>
            </nav>
        </header>
    )
}

export default HostVanDetailHeader;
