
import Container from './components/canvas';
import NavBar from './components/navBar';
import Sidebar from './components/sidebar';
import { MovieProvider } from './context/MovieContext';
import './App.css';


const App = () => {

  return (
    <MovieProvider>
      <div className='App'>
        <NavBar />
        <section className='content'>
          <Sidebar />
          <Container />
        </section>
      </div>
    </MovieProvider>
  );
}

export default App;
