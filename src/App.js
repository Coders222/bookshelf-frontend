import {React} from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Login from "./components/Login"
import Register from "./components/Register"
import Discover from "./components/Discover"
import Bookshelf from "./components/Bookshelf";

function App() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>}/> 
            <Route exact path = "/register" element={<Register/>}/>
            <Route exact path = "/login" element={<Login/>}/>
            <Route exact path = "/discover" element={<Discover/>}/>
            <Route exact path = "/bookshelf/:id" element={<Bookshelf/>}/>
          </Routes>
      </Router>
    );
}
export default App;
