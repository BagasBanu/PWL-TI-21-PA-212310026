import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Brands from "./components/Brands";
import Testimonials from "./components/Testimonials";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Products />
      <Brands />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
