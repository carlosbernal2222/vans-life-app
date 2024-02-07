import React from "react";
import { NavLink } from "react-router-dom";
import "./HostHeader.css"
const HostHeader = () => {
    return(
        <header>
            <nav>
                <NavLink
                    to="."
                    className={({isActive})=>isActive? "active-link": null}
                    end
                >DashBoard</NavLink>
                <NavLink
                    to="income"
                    className={({isActive})=>isActive? "active-link": null}
                >Income</NavLink>
                <NavLink
                    to="vans"
                    className={({isActive})=>isActive? "active-link": null}
                >Vans</NavLink>
                <NavLink
                    to="reviews"
                    className={({isActive})=>isActive? "active-link": null}
                >Reviews</NavLink>

            </nav>
        </header>
    )
}

export default HostHeader