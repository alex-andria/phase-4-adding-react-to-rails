import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";


function App() {
  const [movies, setMovies] = useState('')

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      // .then((movies) => console.log(movies));
      .then(setMovies)
  }, []);

  return(
  <>
    <h1>Hello from React!</h1> 
    <p>{console.log(movies)}</p>
  </>
  )
}

export default App;
