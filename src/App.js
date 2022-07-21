import './App.css';
import Banner from './Banner';
import Row from './components/Row';
import requests from './requests';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row
      title="NETFLIX ORIGINALS"
      isLargeRow={true}
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      />
      <Row
      title="Top Rated Movies"
      fetchUrl={requests.fetchTopRated}
      />
      <Row
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}
      />
      <Row
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
      title="Documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
