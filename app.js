const stringPassIn = `https://api.nasa.gov/planetary/apod?api_key=vVoCVxcepv4Ob0JI2VysjrNxtZ9RGTE6MYlwFjtW`


fetch (stringPassIn)            //fetch dat from the api
.then((res) => res.json())      //parses the data from JSON back into useable data
.then((resData)  => {           //re-names the data with variables i can inject into the dom
    heading = resData.title;
    date = resData.date;
    textBlock = resData.explanation;
    dailyImg = resData.url;

document.querySelector('h1').innerHTML = `NASA Daily Photo ${heading}`;//first three are dynamic text
document.querySelector('h3').innerHTML = date;
document.querySelector('p').innerHTML  = textBlock;
document.getElementById('myImg').src   = dailyImg; //dynamic image

});