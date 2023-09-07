function setTimeoutUsingSetInterval(callback, delay) {
    const intervalId = setInterval(() => {
      callback();
      clearInterval(intervalId);
    }, delay);
  }
  
  // Usage example
  let timer;
  console.log("Start");
  timer=setTimeoutUsingSetInterval(() => {
    clearInterval(timer)
    console.log("Delayed message");
  }, 2000);
  console.log("End");
  