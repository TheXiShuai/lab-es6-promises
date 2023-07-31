// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;

  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

    getInstruction("mashedPotatoes", 2, (step2) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step2}</li>`;

      getInstruction("mashedPotatoes", 3, (step3) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step3}</li>`;

        getInstruction("mashedPotatoes", 4, (step4) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step4}</li>`;

          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
          document
            .querySelector("#mashedPotatoesImg")
            .removeAttribute("hidden");
        });
      });
    });
  });
});
getInstruction(
  0,
  () => {
    getInstruction(
      1,
      () => {
        getInstruction(
          2,
          () => {
            getInstruction(
              3,
              () => {},
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
      (err) => console.log(err)
    );
  },
  (err) => console.log(err)
);

// Iteration 2 - using promises

obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })

  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })

  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })

  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })

  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })

  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })

  .then(() => {
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
  });

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const broccoliData0 = await obtainInstruction("broccoli", 0);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData0}</li>`;
    const broccoliData1 = await obtainInstruction("broccoli", 1);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData1}</li>`;
    const broccoliData2 = await obtainInstruction("broccoli", 2);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData2}</li>`;
    const broccoliData3 = await obtainInstruction("broccoli", 3);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData3}</li>`;
    const broccoliData4 = await obtainInstruction("broccoli", 4);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData4}</li>`;
    const broccoliData5 = await obtainInstruction("broccoli", 5);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData5}</li>`;
    const broccoliData6 = await obtainInstruction("broccoli", 6);
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>${broccoliData6}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready</li>`;
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// bonus1

// Bonus 2 - Promise all
