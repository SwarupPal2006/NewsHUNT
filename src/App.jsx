

import"./App.css";
import Navbar from './components/navbar';
import Front from './components/front';
import Catagory from "./components/newsBoard";
import Footer from './components/footer';
import About from "./components/About";
import GeminiSummarizer from "./components/summarized";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App () {
  return (
    <Router>
      <Navbar/>
      <Routes>
          {/* Home Page with Hero Section */}
        <Route path="/" element={<Front/>} />
        <Route path="/summarized" element={<GeminiSummarizer/>} />
        <Route path="/newsboard" element={ <Catagory/>} />
       <Route path="/about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;