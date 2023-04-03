
import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { action, comedy, horror, originals, romanceMovies, trending } from './Components/urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner url={trending} />
      <RowPost url={originals} title='Netflix originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={romanceMovies} title='Romance Moviees' isSmall/>

    </div>
  );
}

export default App;
