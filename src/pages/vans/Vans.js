import React from "react";
import "./Vans.css";
import {useSearchParams, useLoaderData, Link} from "react-router-dom";
import {getVans} from "../../api/api";


//Loader to fetch data before Route loading
// export async function loader() {
//     try {
//         // Fetch vans data using the getVans function
//         const vansData = await getVans();
//         // Return the fetched data
//         return vansData;
//     } catch (error) {
//         // Handle any errors
//         console.error('Error fetching vans:', error);
//         throw error;
//     }
// }
export default function Vans(){

    const [searchParams, setSearchParams] = useSearchParams();
    // const [vans, setVans] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const typeFilter = searchParams.get("type");
    const vans = useLoaderData()



    //Api fetch function
    // const getVans = async ()=> {
    //     try{
    //         const response = await api.get('api/vans');
    //         console.log(response.data);
    //         setVans(response.data);
    //     }catch (err){
    //         console.log(err);
    //     }
    // }

    //Api fetch from getVans function
    React.useEffect(()=> {
        const fetchData = async()=>{
            setLoading(true)
            try{
                const vansData = await getVans();
                setVans(vansData)
            }catch (error){
                setError(error)
                console.error('Error fetching Vans', error)
            }finally {
                setLoading(false)
            }
        }

        fetchData();
    },[]);

    //Vans mapping
    const displayedVans = typeFilter
        ? vans.filter(van => van.type.toLowerCase() === typeFilter)
        : vans;

    const vanElements = displayedVans.map(van=>(
        <div key={van.id} className="van-tile">
            <Link
                to={`${van.id}` }
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}

                aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
            >

                <img
                    src={van.imgUrl}
                    alt={`Image of ${van.name}`}
                />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    // console.log(vans)

    function genNewSearchParamString(key, value) {
        const sp = new URLSearchParams(searchParams)
        if (value === null) {
            sp.delete(key)
        } else {
            sp.set(key, value)
        }
        return `?${sp.toString()}`
    }

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    if(error){
        return <h1>There is an Error: {error.message}...</h1>
    }

  return(
      <div className="van-list-container">
          <h1>Explore our Vans options</h1>

          <div className="van-list-filter-buttons">
              {/*<Link to="?type=simple" className="van-type simple">Simple </Link>*/}
              {/*<Link to="?type=rugged" className="van-type rugged">Rugged </Link>*/}
              {/*<Link to="?type=luxury" className="van-type luxury">Luxury </Link>*/}
              {/*<Link to="." className="van-type clear-filters">Clear Filters</Link>*/}

              <button className={
                  `van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
                      onClick={() => handleFilterChange("type", "simple")}>

                  Simple

              </button>
              <button className={
                  `van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
                      onClick={() => handleFilterChange("type", "rugged")}>

                  Rugged

              </button>
              <button className={
                  `van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
                      onClick={() => handleFilterChange("type", "luxury")}>

                  Luxury

              </button>
              {/* Conditional rendering for the Clear Filters button */}
              {typeFilter && (
                  <button className="van-type clear-filters" onClick={() => handleFilterChange("type", null)}>
                      Clear Filters
                  </button>
              )}
          </div>
          <div className="van-list">
              {vanElements}
          </div>
      </div>
  )
}
