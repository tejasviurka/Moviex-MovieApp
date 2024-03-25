import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux';
import { getApiConfiguration } from "./store/homeSlice";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);
// every time we do api call, we need useeffect method, but using one custom hook we can reduce this work
useEffect(() => {
  apiTesting();
  // fetchApiConfig();
  // genresCall();
}, []);

const apiTesting = () =>{
  // const fetchApiConfig = () => {
    // here api is getting called, and below is the end pt
    fetchDataFromApi('/movie/popular')
      // yaha milega reposnse inside then, if req get successful
      .then((res) => {
        console.log(res);
        // dispatch(getApiConfiguration(res));
      });
  };

  return  <div className="App">App</div>;
    // <BrowserRouter>
    //   {/* <Header /> */}
    //   <Routes>
    //     {/* creating route for home page */}
    //     <Route path="/" element={<Home />} />
    //     <Route path="/:mediaType/:id" element={<Details />} />
    //     <Route path="/search/:query" element={<SearchResult />} />
    //     <Route path="/explore/:mediaType" element={<Explore />} />
    //     <Route path="#" element={<PagenotFound />} />
    //   </Routes>
    //   {/* <Footer /> */}
    // </BrowserRouter>);
}

export default App;
