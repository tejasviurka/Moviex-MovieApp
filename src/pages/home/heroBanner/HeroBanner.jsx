import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./style.scss";
import useFetch from "../../../Hooks/useFetch";
const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const {data, loading} = useFetch("/movie/upcoming");


    // navigate ke andr wo url pass karo jaha hum pohchna hai

    const searchQueryHandler = () => {
        if(event.key === "Enter" && query.length > 0){
            // query is param here, it get searched 
            navigate(`/search/${query}`)
        }
    };

  return (
   <div className="heroBanner">
    <div className="wrapper">
        <div className="herBannerContent">
            <span className="title">Welcome</span>
            <span className="Subtitletitle">Millions of movies, TV Shows and people to discover.
            Explore now </span>
            <div className="searchInput">
                <input
                 type="text" 
                 placeholder="Search for a movie or tv show.."

                //  adding method here
                // jo bhi hum type karenge wo saare value setquery se uske andr set hote jayege
                 onChange={() => setQuery(e.target.value)}
                 onKeyUp = {searchQueryHandler}
                 />
                 <button>Search</button>
            </div>

        </div>
    </div>
   </div>
  );
};

export default HeroBanner;
