import {BrowserRouter as Router,Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Signup from "./pages/Signup";







function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Project/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Signup" element={<Signup/>}/>

     </Routes>
    <Footer/>

    </Router>
  );
}

export default App;
