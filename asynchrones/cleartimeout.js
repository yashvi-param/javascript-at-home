// in setTimeOut the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the clearTimeout() method. 

  let stop;          // Declare the stop variable to store the timer ID


    const currentTime = () => {
          // Return the current date and time

          let dateAndTime = new Date();

          let time = dateAndTime.toLocaleTimeString();

          console.log(time);


          // Schedule the next execution and store the timer ID in 'stop'

          stop = setTimeout(currentTime, 3000);
    };

    currentTime();

    setTimeout(()=>{
        clearTimeout(stop);
        console.log("stoped");
    },10000);