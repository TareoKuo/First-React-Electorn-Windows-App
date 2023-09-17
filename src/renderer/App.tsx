import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Systeminfo from "./Systeminfo";
import Undefined from "./Undefined";
import './App.css';

function FrontPage() {
  return (
    <div>
      <div className="Function">
        <a
          href="https://github.com/TareoKuo/First-React-Electorn-Windows-App"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className='buttonclick'>
            Tareo Github
          </button>
        </a>
      </div>
      <div className="Function">
        <Link to={"/Systeminfo"}>
          <button type="button" className='buttonclick'>
            Systeminfo
          </button>
        </Link>
        <Link to={"/Undefined"}>
          <button type="button" className='buttonclick'>
            Undefind
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1 className='AppName' style={{fontFamily: 'DFKai-sb'}}>Tareo study Windows App</h1>
      <Router>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/Systeminfo" element={<Systeminfo />} />
          <Route path="/Undefined" element={<Undefined />} />
        </Routes>
      </Router>
    </div>
  );
}
