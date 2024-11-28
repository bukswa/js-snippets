// async function RetryAPI() {
//   let currentTry = 0;

//   while (true) {
//     try {
//       callExternalAPI();
//       console.log("call succeeded...");
//       break;
//     } catch (error) {
//       currentTry += 1;
//       console.log(error);
//       if (currentTry > 10) {
//         console.log("Max retry limit reached. Halting the program...");
//         break;
//       }
//     }
//     await sleep(2000);
//   }
// }

// function callExternalAPI() {
//   console.log("Calling external api...");
//   const possibility = Math.random() < 0.6;
//   if (possibility) return true;
//   else throw new Error("call failed....");
// }

// function sleep(ms) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res();
//     }, ms);
//   });
// }

// RetryAPI();

function exec() {
  const promise1 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("called p1");
      res(1);
    }, 3000);
  });

  const promise2 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("called p2");
      rej(2);
    }, 1000);
  });

  const promise3 = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("called p3");
      res(3);
    }, 3000);
  });

  Promise.race([promise1, promise2, promise3])
    .then((values) => {
      console.log("entered into then block");
    })
    .catch((error) => {
      console.log("error occured");
    });
}

exec();
