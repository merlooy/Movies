// import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>миноны лучшие</h1>
//         <img src = "https://img10.joyreactor.cc/pics/post/%D0%B3%D0%B8%D1%84%D0%BA%D0%B8-%D0%9C%D0%B8%D0%BD%D1%8C%D0%BE%D0%BD%D1%8B-%D0%93%D0%B0%D0%B4%D0%BA%D0%B8%D0%B9-%D0%AF-2-%D1%83%D0%B4%D0%B0%D0%BB%D1%91%D0%BD%D0%BD%D0%BE%D0%B5-801471.gif"></img>
//         <img src = "photo_2024-02-08_22-01-06.jpg"></img>
//         <div className="clicker">
//       <button className="button minus" onClick={decrement}>-</button>
//       <span className="count">{count}</span>
//       <button className="button plus" onClick={increment}>+</button>
//     </div>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import {Header} from './layout/header';
import {Footer} from './layout/footer';
import {Main} from './layout/main';

function App() {
    return (
      <React.Fragment>
        < Header />
        < Main />
        < Footer />
      </React.Fragment>
    );
  }  
export default App;
