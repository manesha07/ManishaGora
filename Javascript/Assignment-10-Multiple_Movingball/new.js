// //closure and IIFE
// for (var i = 1; i <= 10; i++) {
//     setTimeout(
//       (function (i) {
//         return function () {
//           console.log(i, " closure & iffe");
//         };
//       })(i),
//       1000
//     );
//   }
  
//   // closure and IIFE
//   for (var i = 1; i <= 10; i++) {
//     setTimeout(
//       (function (i) {
//         return function () {
//           console.log(i, " closure & iffe");
//         };
//       })(i),
//       1000
//     );
//   }
  
//   // IIFE
//   for (var i = 1; i <= 10; i++) {
//     setTimeout(
//       (function (i) {
//         console.log(i, " iffe");
//       })(i),
//       1000
//     );
//   }
  
  for (var i = 1; i <= 10; i++) {
    setTimeout(function (i) {
      console.log(i, " async");
    }, 1000,i);
  }
  
//   var x = function () {
//     var i = i;
//     console.log(i, " closure & iffe");
//   };