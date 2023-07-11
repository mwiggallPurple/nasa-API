const stringPassIn = `https://api.nasa.gov/planetary/apod?api_key=vVoCVxcepv4Ob0JI2VysjrNxtZ9RGTE6MYlwFjtW`
let responseData;

fetch (stringPassIn)
.then((res) => res.json())
.then((responseData) => {
    const h1 = responseData.title; //this is the data coming from NASA
    const h3 = responseData.date;
    const p = responseData.explanation;
    const myImg = responseData.url;

    document.querySelector('h1').innerHTML = `NASA Daily Photo ${h1}`;//daily title changes/ is dynamic.
    document.querySelector('h3').innerHTML = h3; //todays date updates
    document.querySelector('p').innerHTML = p; //information about the photo
    document.getElementById('myImg').src = myImg; //dynamic image! 


});