import React from 'react';
import "./app.scss"
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <main className="container app">
      <SearchBar />
      <CurrentWeather />
    </main>
  );
}

export default App;
