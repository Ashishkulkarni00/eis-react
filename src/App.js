import './App.css';
import PayementGateway from './components/PayementGateway';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element = {<PayementGateway/>}/>

      </Routes>
    </Router>
  );
}

export default App;
