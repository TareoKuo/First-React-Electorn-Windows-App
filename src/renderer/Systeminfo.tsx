import { Link } from 'react-router-dom';
import './Systeminfo.css';
// import * as ffi from "ffi-napi";

// console.log("HIIIIIIIIIIIIIIIII");
// console.log(ffi);
// const libm  = new ffi.Library('./Dll1.dll', {
//     'get_cpu_info':[ 'string',[]]
// });

let CpuName: string = "HelloWorld!!!"

const Systeminfo = () => {
    const lefttop: React.CSSProperties = {
        position: 'fixed',
        top: '130px',
        color: '#000000',
        marginLeft: '-35px'
    }
    const righttop: React.CSSProperties = {
        position: 'fixed',
        top: '0px',
        right: '180px',
        color: '#000000',
        fontFamily: 'DFKai-sb'
    }


    return (
        <div>
            <h1 style={righttop}>SystemInfo</h1>
            <div className="back">
                <Link to={"/"}>
                    <button type='button' className='buttonclick_systeminfo' >
                        首頁
                    </button>
                </Link>
            </div>
            <div className='Systeminfo'>
                <div className='Systeminfo_content'>
                    <div className="title">
                        <span>System Information and Computer Information</span>
                    </div>
                    {/* ...是展開運算符 */}
                    <span style={lefttop}>
                        CpuName: {CpuName}<br/>
                        123456 <br/>
                        123456 <br/>
                        123456 <br/>
                        123456 <br/>
                    </span>
                </div>
                <div className='Systeminfo_content2'>
                    <div className="title">
                        <span>Undefined</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Systeminfo