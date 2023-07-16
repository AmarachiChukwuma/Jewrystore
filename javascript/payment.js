// // paymentRequest 
// const request = new PaymentRequest(
//     buildSupportedPaymentMethodData(),
//     buildShoppingCartDetails(),
//   );

//   function buildSupportedPaymentMethodData() {
//     // Example supported payment methods:
//     return [{ supportedMethods: "https://example.com/pay" }];
//   }
  
//   function buildShoppingCartDetails() {
//     // Hardcoded for demo purposes:
//     return {
//       id: "order-123",
//       displayItems: [
//         {
//           label: "Example item",
//           amount: { currency: "USD", value: "1.00" },
//         },
//       ],
//       total: {
//         label: "Total",
//         amount: { currency: "USD", value: "1.00" },
//       },
//     };
//   }

// //   payment process
// request.show().then((paymentResponse) => {
//     // Here we would process the payment. For this demo, simulate immediate success:
//     paymentResponse.complete("success").then(() => {
//       // For demo purposes:
//       introPanel.style.display = "none";
//       successPanel.style.display = "block";
//     });
//   });


//   // Dummy payment request to check whether payment can be made
// new PaymentRequest(buildSupportedPaymentMethodData(), {
//     total: { label: "Stub", amount: { currency: "USD", value: "0.01" } },
//   })
//     .canMakePayment()
//     .then((result) => {
//       if (result) {
//         // Real payment request
//         const request = new PaymentRequest(
//           buildSupportedPaymentMethodData(),
//           checkoutObject,
//         );
//         request.show().then((paymentResponse) => {
//           // Here we would process the payment.
//           paymentResponse.complete("success").then(() => {
//             // Finish handling payment
//           });
//         });
//       }
//     });



//     // detecting avaliability of the payment request 
//     const checkoutButton = document.getElementById("checkout-button");
// if (window.PaymentRequest) {
//   let request = new PaymentRequest(
//     buildSupportedPaymentMethodNames(),
//     buildShoppingCartDetails(),
//   );
//   checkoutButton.addEventListener("click", () => {
//     request
//       .show()
//       .then((paymentResponse) => {
//         // Handle successful payment
//       })
//       .catch((error) => {
//         // Handle cancelled or failed payment. For example, redirect to
//         // the legacy web form checkout:
//         window.location.href = "/legacy-web-form-checkout";
//       });

//     // Every click on the checkout button should use a new instance of
//     // PaymentRequest object, because PaymentRequest.show() can be
//     // called only once per instance.
//     request = new PaymentRequest(
//       buildSupportedPaymentMethodNames(),
//       buildShoppingCartDetails(),
//     );
//   });
// }

// // checking wether users can make payment
// const checkoutButton = document.getElementById("checkout-button");
// checkoutButton.innerText = "Loading…";
// if (window.PaymentRequest) {
//   const request = new PaymentRequest(
//     buildSupportedPaymentMethodNames(),
//     buildShoppingCartDetails(),
//   );
//   request
//     .canMakePayment()
//     .then((canMakeAFastPayment) => {
//       checkoutButton.textContent = canMakeAFastPayment
//         ? "Fast Checkout with W3C"
//         : "Setup W3C Checkout";
//     })
//     .catch((error) => {
//       // The user may have turned off the querying functionality in their
//       // privacy settings. The website does not know whether they can make
//       // a fast payment, so pick a generic title.
//       checkoutButton.textContent = "Checkout with W3C";
//     });
// }




if (window.PaymentRequest) {
    // Yes, we can use the API
  } else {
    // No, fallback to the checkout page
    window.location.href = '/checkout'
  }
  const paymentMethods = [
    {
      supportedMethods: ['basic-card']
    }
  ]
  
//   paymentMethod para
  const paymentDetails = {
    total: {
      label: 'Total Amount',
      amount: {
        currency: 'USD',
        value: 8.49
      }
    }
  }
  
  const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails)
  const paymentMethods = [
    {
      supportedMethods: ['basic-card'],
      data: {
        supportedNetworks: ['visa', 'mastercard', 'discover'],
        supportedTypes: ['credit']
      }
    }
  ]
  // ...
  const paymentDetails = {
    total: {
      label: 'Total Amount',
      amount: {
        currency: 'USD',
        value: 8.49
      }
    },
    displayItems: [
      {
        label: '15% Discount',
        amount: {
          currency: 'USD',
          value: -1.49
        }
      },
      {
        label: 'Tax',
        amount: {
          currency: 'USD',
          value: 0.79
        }
      }
    ]
  }
  // ...
const options = {
    requestPayerName: true,
    requestPayerPhone: true,
    requestPayerEmail: true
  }
  
  const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

  // ...
const paymentRequest = new PaymentRequest(paymentMethods, paymentDetails, options)

paymentRequest
  .show()
  .then(paymentResponse => {
    // close the payment UI
    paymentResponse.complete().then(() => {
      // TODO: call REST API to process the payment at the backend server
      // with the data from `paymentResponse`.
    })
  })
  .catch(err => {
    // user closed the UI or the API threw an error
    console.log('Error:', err)
  })
  
  // ...
setTimeout(() => {
    paymentRequest
      .abort()
      .then(() => {
        // aborted payment request
        console.log('Payment request aborted due to no activity.')
      })
      .catch(err => {
        // error while aborting
        console.log('abort() Error: ', err)
      })
  }, 5000)