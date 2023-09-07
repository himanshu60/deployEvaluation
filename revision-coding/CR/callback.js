// function doSomething(callback) {
//     // Perform some operation or task

//     // Once the operation is complete, call the callback function
//     callback();
//   }

//   function callbackFunction() {
//     console.log("Callback function called");
//   }

//   // Pass the callback function as an argument
//   doSomething(callbackFunction);





function doS(cb) {
  cb();
}

function cbfunc() {
  console.log(`function called`);
}
doS(cbfunc);
