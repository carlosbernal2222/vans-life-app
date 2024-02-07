import React from "react";
import {Outlet} from "react-router-dom";
import HostHeader from "./HostHeader";

const HostLayout = () => {
    return(
        <div>
            <HostHeader/>
            <Outlet/>
        </div>
    )
}

export default HostLayout