

const stringPassIn = `https://api.nasa.gov/planetary/apod?api_key=vVoCVxcepv4Ob0JI2VysjrNxtZ9RGTE6MYlwFjtW`
let responseData;   //defines the variable I will use for the parsed data.


fetch (stringPassIn)                        //fetch data from the api
  .then((res) => res.json())                //parses the data from JSON back into useable data (an object in this case)
  .then((data)  => (responseData = data))   //re-names the data so I can access it using .notation
  .then(() => {             
   
    document.querySelector('h1').innerHTML =`NASA Daily Photo ${responseData.title}`;//first two are dynamic text
    document.querySelector('p').innerHTML  = responseData.explanation;
    document.getElementById('myImg').src   = responseData.url; //dynamic image

});

//I could also assign the data to variables and then insert the variables into the inner html but this 

// is less code. 