import {BrowserRouter as Router,Switch} from "react-router-dom"
import './App.css';
import Header from './Components/common/heading/Header';
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import CourseHome from "./Components/allcourses/CourseHome";
import Team from "./Components/team/Team";
import Price from "./Components/pricing/Price";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Cantact";
import Footer from "./Components/common/footer/Footer";

function App() {
  return (
    <>
    <Router>
     <Header/>
     <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/courses" exact component={CourseHome}/>
      <Route path="/team" exact component={Team}/>
      <Route path="/pricing" exact component={Price}/>
      <Route path="/journal" exact component={Blog}/>
      <Route path="/contact" exact component={Contact}/>
     </Switch>
     <Footer/>
     </Router>
    </>
  );
}

export default App;
