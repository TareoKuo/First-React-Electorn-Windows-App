import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';


const Undefined = () =>{
    const buttonclick = {
        width: '100px',
        height: '50px'
    }
    return(
        <div>
            <div className="back">
                <Link to={"/"}>
                    <button type='button' className='buttonclick' style={buttonclick}>
                        首頁
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Undefined