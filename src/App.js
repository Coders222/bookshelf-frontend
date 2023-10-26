import {React} from "react";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Landing from "./components/Landing";
import Register from "./components/Register"

function App() {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<Landing/>}/> 
            <Route exact path = "/register" element={<Register/>}/>
          </Routes>
      </Router>
    );
}
export default App;
