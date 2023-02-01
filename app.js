let stringPassIn = `https://api.nasa.gov/planetary/apod?api_key=vVoCVxcepv4Ob0JI2VysjrNxtZ9RGTE6MYlwFjtW`


let responseData;

fetch (stringPassIn)
.then((res) => res.json())
.then((data)  => (responseData = data)) 
.then(() => { (responseData);
responseData.title;
responseData.date;
responseData.explanation;
responseData.url;


document.querySelector('h1').innerHTML = `NASA Daily Photo ${responseData.title}`;//first three are dynamic text
document.querySelector('h3').innerHTML = responseData.date;
document.querySelector('p').innerHTML = responseData.explanation;
document.getElementById('myImg').src = responseData.url; //dynamic image! 


});


