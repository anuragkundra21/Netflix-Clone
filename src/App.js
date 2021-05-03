import React from 'react';
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner'
import Nav from './Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
     <Banner>
     </Banner>
     <Row 
     title="Top Rated"
     fetchUrl={requests.fetchTopRated}
     isLargeRow
    />
     <Row title="Popular"fetchUrl={requests.fetchPopular}/>
     <Row title="Trending"fetchUrl={requests.fetchTrending}/>
     <Row title="Upcoming"fetchUrl={requests.fetchUpcoming}/>
    </div>
  );
}

export default App;
