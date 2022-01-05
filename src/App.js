import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Jobs from './Pages/Jobs';
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/jobs" element={<Jobs/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
