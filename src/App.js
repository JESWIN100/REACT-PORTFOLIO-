import {BrowserRouter as Router,Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio-react" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/Contact" element={<Contact/>}/>

     </Routes>
    <Footer/>

    </Router>
  );
}

export default App;
