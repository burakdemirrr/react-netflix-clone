import React from 'react'
import Row from './Row';
import requests from './requests';
import Banner from './Banner'
function Home() {
    return (
        <div>
        <Banner/>
        <Row title={"Netflix Originals"} fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}/>
        <Row title={"Trending"} fetchUrl={requests.fetchTrending}/>
        <Row title={"Top Rated"} fetchUrl={requests.fetchTopRated}/>
        <Row title={"Action Movies"} fetchUrl={requests.fetchActionMovies}/>
        <Row title={"Comedy Movies"} fetchUrl={requests.fetchComedyMovies}/>
        <Row title={"Horror Movies"} fetchUrl={requests.fetchHorrorMovies}/>
        <Row title={"Romance Movies"} fetchUrl={requests.fetchRomanceMovies}/>
        <Row title={"Documentaries"} fetchUrl={requests.fetchDocumectaries}/>
        </div>
    )
}

export default Home