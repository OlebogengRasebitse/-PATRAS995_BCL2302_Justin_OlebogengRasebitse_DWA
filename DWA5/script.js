
// const form = document.querySelector("[data-form]");
// const result = document.querySelector("[data-result]");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const entries = new FormData(event.target);
//   const { dividend, divider } = Object.fromEntries(entries);

//   if (dividend === "YOLO" && divider === "+++") {
//     const errorMessage = "Something critical went wrong. Please reload the page";
//     document.documentElement.innerHTML = errorMessage;
//     console.error("Critical error occurred");
//     throw new Error(errorMessage);
//   } else {
//     if (dividend === "" || divider === "") {
//       result.innerText = "Division not performed. Both values are required in inputs. Try again";
//     } else if (isNaN(dividend) || isNaN(divider)) {
//       result.innerText = "Division not performed. Invalid number provided. Try again";
//       console.error("Invalid number provided");
//     }  else if (divider < 0) {
//           result.innerText = "Division not performed. Invalid number provided. Try again";
//          console.error("Division by zero");
//      } else {
//       const divisionResult = Math.floor(dividend / divider);
//       result.innerText = divisionResult;
//     }
//   }
// });


/**
 * This handles a form submission and performs a division operation based on the input values.
 * 
 * 
 */

//select the HTML elements from the document using the querySelector method and store them in the variables form and result
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try { 
    //YOLO * +++
    if (isNaN(dividend) || isNaN(divider)) {
      const errorMessage = "Something critical went wrong. Please reload the page";
      document.documentElement.innerHTML = errorMessage;
      console.error("Critical error occurred");
      throw new Error(errorMessage);

      //empty inputs
    }if (dividend === "" || divider === "") {
        result.innerText = "Division not performed. Both values are required in inputs. Try again";

        //20 * -3
      }if (divider < 0 || dividend < 0 ) {
        result.innerText = "Division not performed. Invalid number provided. Try again";
        throw new Error("Division not performed. Invalid number provided. Try again");

        //20*-7
      } else {
        const divisionResult = Math.floor(dividend / divider);
        result.innerText = divisionResult;
      }
    }

    //If any errors occur within the try block, they will be caught by the catch block. In this case, the error is logged to the console using 
  } catch (error) {
    // Handle the error if necessary
    console.error(error);
  }
});


