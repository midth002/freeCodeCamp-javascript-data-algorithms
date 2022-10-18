// Create a new promise called makeServerRequest. Pass in a function with resolve and reject parameters to the constructor.

const makeServerRequest = new Promise((resolve, reject) => {
  
})

/*
Make the promise handle success and failure.
 If responseFromServer is true, call the resolve method to successfully complete the promise. 
 Pass resolve a string with the value We got the data. If responseFromServer is false, use the reject method instead and pass it the string: Data not received.

*/


const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });


  const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
  
  
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  
  makeServerRequest3.then(result => {
    console.log(result);
  });