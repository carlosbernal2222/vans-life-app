import React from "react";
import "./VanDetail.css"
import api from "../../api/axiosConfig"
import {Link, useParams, useLocation} from "react-router-dom";

const VanDetail = () => {

    const [van, setVan] = React.useState(null)
    const location = useLocation()
    const params = useParams()
    const getVan = async () => {
        try{
            const response = await api.get(`api/vans/${params.id}`);
            setVan(response.data);
        }catch (err){
            console.log(err);
        }
    }

    React.useEffect(()=>{
        getVan();
    },[params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    return (
        <div className="van-detail-container">
            <Link
                to= {`..${search}`}
                relative="path"
                className="back-button"
                state=""
            >
                &larr; <span>Back to {type} vans</span>
            </Link>
            {van ? (
                <div className="van-detail">
                    <img src={van.imgUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )

}

export default VanDetail;