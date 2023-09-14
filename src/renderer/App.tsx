import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function FrontPage() {
  return (
    <div>
      <div className="FrontPage">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
        <Link to={"/Second"}>到第二頁</Link>
      </div>
    </div>
  );
}

const SecondPage = () =>{
  const StyleSheet: React.CSSProperties = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "#08D9D6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
  }
  return(
      <div style={StyleSheet}>
          <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
          <Link to={"/"}>到第一頁</Link>
      </div>
  )
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/Second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}
