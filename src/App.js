import React from 'react';
import BackLog from './Components/Backlog/BackLog';
import Header from './Components/Header/Header';
import Board from './Pages/Board/Board';

function App() {
  return (
   <>
    <Header />
    <Board />
    <BackLog />
   </>
  );
}

export default App;
