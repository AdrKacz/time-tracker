// const path = require('path');
// const { open } = require('fs/promises');
// const { contextBridge } = require('electron');
//
// // const FILE_PATH = join(__dirname, 'data', 'data.txt');
// //
// // window.appendTime = function(buttonSelected, deltaMilliseconds) {
// //   open(FILE_PATH, 'a')
// //     .then((fileHandle) => {
// //       fileHandle.close();
// //     })
// //     .catch((err) => {
// //       console.error(`ERROR while writing data to ${FILE_PATH} :\n${err}`);
// //     });
// // };
//
// window.addEventListener('DOMContentLoaded', () => {
//   window.test = "BONJOUR";
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector);
//     if (element) element.innerText = text;
//   };
//
//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type]);
//   };
// });
//
// contextBridge.exposeInMainWorld(
//   'electron',
//   {
//     appendTime: (buttonSelected, deltaMilliseconds) => (
//       open(FILE_PATH, 'a')
//         .then((fileHandle) => {
//           fileHandle.close();
//         })
//         .catch((err) => {
//           console.error(`ERROR while writing data to ${FILE_PATH} :\n${err}`);
//         });
//     ),
//   }
// );
