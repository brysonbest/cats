const fs = require('fs');

//broken version:
/* const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) return data;
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
}; */

//updated
const breedDetailsFromFile = function(breed, callbackWhenDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) callbackWhenDone(data);
  });
};

//separate console.log function to pass in as callback
const printOutCatBreed = breed => {
  console.log('Return Value: ', breed)
};

// now two items to pass in for async to work
breedDetailsFromFile('Bombay', printOutCatBreed);