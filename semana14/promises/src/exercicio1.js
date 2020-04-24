"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
//
// const myPromise = new Promise((resolve,reject)=>{
//     const handleFileRead = (err: Error, data: Buffer)=>{
//         try {
//             const fileContent: string = data.toString();
//             resolve(fileContent)
//         } catch(err){
//             reject(err)
//         }
//     }
//     readFile("1.txt", handleFileRead);
// })
//
// myPromise.then((result: string)=>{
//     console.log(result)
// }).catch((err)=>{
//     console.error(err);
// })
var myPromise = new Promise(function (resolve, reject) {
    var handleFileRead = function (err, data) {
        try {
            var fileContent = data.toString();
            resolve(fileContent);
        }
        catch (e) {
            reject(err);
        }
    };
    fs_1.readFile("exercicio1.txt", handleFileRead);
});
myPromise
    .then(function (result) {
    //faz o que você quiser aqui porque deu certo
    console.log(result);
})["catch"](function (err) {
    console.log(err);
});
