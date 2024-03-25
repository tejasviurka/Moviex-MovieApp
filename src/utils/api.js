// yaha ake hume apna axios choose krke ek global method likhna hai
// apne api call karane ke liye

import axios from "axios" ;

// create 1 base url
const BASE_URL = "https://api.themoviedb.org/3";
// create 1 var for token, save token in this
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODA0MTJmMDVlYTM3NTNhMWQ3MDQ5OGU1ZjY1Y2VkMSIsInN1YiI6IjY1ZmU3ZTk2MjI2YzU2MDE3ZDcwNGMyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9UcnOT4u8M4II_v8LgijS_LGA2U_ckJFMJg6gEIXWQU"
// jo ye token hai n usko header mai bhjna hai, jo api call krnege usme header hoge waha ye tokens pass krna hai
const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

// creating method, passing two arguments ie url, params

// axios.get call krne pr jo bhi response hume milega wo sara resposne ek data ke andr store hota hai
// uss data ko humne de structure karva liya hai 
export const fetchDataFromApi = async (url, params) =>{
    try {
        const {data} =await axios.get(BASE_URL +url, {
            headers,
            params
        });
        return data;

    } catch (err){
        console.log(err);
        return err;
    }

};