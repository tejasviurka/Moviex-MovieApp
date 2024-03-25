import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

// creating component without using jsx
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // useeffect method called
    useEffect(() => {
        // calling 3 methods
        setLoading("loading...");
        setData(null);
        setError(null);

        // url is dynamic
        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;