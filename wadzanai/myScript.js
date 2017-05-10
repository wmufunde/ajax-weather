/*This is my script code for open weather*/
/*Shift + ctrl+ forward-slash to comment*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false);

function getWeather() {
    var userCity = document.getElementById("theCity").value;
    //console.log(userCity);
    
    //This is where AJAX starts
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + userCity + "&units=metric&APPID=24dac5020ef0a2898354f0a9b28645bf&cnt=7", true);
    //changing it to false makes it synchronus, not asycnchronus
    //Never make it false!
    
    myRequest.send();
    
    myRequest.onload = function() {
        
        if(myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            
            var weatherImage = "http://api.openweathermap.org/img/w/"+myData.list["0"].weather["0"].icon+ ".png";
            
            document.getElementById("imageToday").src = weatherImage;
            
            document.getElementById("highToday").innerHTML = myData.list[0].main.temp_max + "&deg;C";
            
            document.getElementById("lowToday").innerHTML = myData.list[0].main.temp_min + "&deg;C";
            
            document.getElementById("dayDescription").innerHTML = myData.list[0].description + "&deg;C";
            

            
            
            console.log(myData)
        }
    }
    
    //console.log(myRequest);
    
    //console.log("I am at the bottom of send!")
    
}