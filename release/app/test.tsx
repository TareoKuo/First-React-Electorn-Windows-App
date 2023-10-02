

const edge = require('electron-edge-js');
const path = require('path')


// function testDll(): void {
//     const get_cpu_info = edge.func({
//         assemblyFile: path.resolve(__dirname, "./Dll1.dll"),
//         typeName: "",
//         methodName: "get_cpu_info"
//     })
//     get_cpu_info(null , (error: any, value: any) => { // null 傳遞參數, error or value 回掉函數
//         if(error) {
//             console.error('Error : ', error);
//         } else {
//             console.log('CPU info : ', value);
//         }
//     })
// }

// testDll.onclick = function () {
//   const Invoke = edge.func({
//     assemblyFile: path.resolve(__dirname, "./dll/electronedge.dll"),
//     typeName: "electronedge.MQ",
//     methodName: "Invoke"
//   })
//   Invoke('Electron', (error, value) => {
//     console.log(error, value)
//   })
// }

// const testAddon = require('testaddon');
// console.log('addon', testAddon);

// var ffi = require('./node_modules/ffi-napi/bin/win32-x64-113/ffi-napi.node');
var ffi = require('ffi-napi');
// const libm  = ffi.Library('./Dll1.dll', {
//     'get_cpu_info':[ 'string',[]]
// });
const testok = () => {
    console.log("------------------");
    console.log(edge);
    console.log("------------------");
}


export default testok;