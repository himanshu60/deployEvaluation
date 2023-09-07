function outer() {
  const name = "Himanshu";
  function inner() {
    console.log(name);
  }
  return inner;
}
const ans = outer()();

// function outer(){
//     const msg='hello'
//     function inner(){
//         console.log(msg)
//     }
//     return inner
// }
// const data=outer()
// data()
