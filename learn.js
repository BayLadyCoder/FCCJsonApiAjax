/*
JSON APIs and Ajax: Handle Click Events with JavaScript using the onclick property

You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called DOMContentLoaded. Here's the code that does this:

document.addEventListener('DOMContentLoaded',function() {

});
You can implement event handlers that go inside of the DOMContentLoaded function. You can implement an onclick event handler which triggers when the user clicks on the element with id getMessage, by adding the following code:

document.getElementById('getMessage').onclick=function(){};

Add a click event handler inside of the DOMContentLoaded function for the element with id of getMessage.
*/

document.addEventListener('DOMContentLoaded', function () {
    // Add your code below this line
    document.getElementById("getMessage").onclick = function () {};

    // Add your code above this line
});

/*
JSON APIs and Ajax: Change Text with click Events

When the click event happens, you can use JavaScript to update an HTML element.

For example, when a user clicks the "Get Message" button, it changes the text of the element with the class message to say "Here is the message".

This works by adding the following code within the click event:

document.getElementsByClassName('message')[0].textContent="Here is the message";


Add code inside the onclick event handler to change the text inside the message element to say "Here is the message".
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        // Add your code below this line
        document.getElementsByClassName('message')[0].textContent = "Here is the message";

        // Add your code above this line
    }
});



/*
JSON APIs and Ajax: Get JSON with the JavaScript XMLHttpRequest Method

You can also request data from an external source. This is where APIs come into play.

Remember that APIs - or Application Programming Interfaces - are tools that computers use to communicate with one another. You'll learn how to update HTML with the data we get from APIs using a technology called AJAX.

Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation.

JSON syntax looks very similar to JavaScript object literal notation. JSON has object properties and their current values, sandwiched between a { and a }.

These properties and their values are often referred to as "key-value pairs".

However, JSON transmitted by APIs are sent as bytes, and your application receives it as a string. These can be converted into JavaScript objects, but they are not JavaScript objects by default. The JSON.parse method parses the string and constructs the JavaScript object described by it.

You can request the JSON from freeCodeCamp's Cat Photo API. Here's the code you can put in your click event to do this:

req=new XMLHttpRequest();
req.open("GET",'/json/cats.json',true);
req.send();
req.onload=function(){
  json=JSON.parse(req.responseText);
  document.getElementsByClassName('message')[0].innerHTML=JSON.stringify(json);
};
Here's a review of what each piece is doing. The JavaScript XMLHttpRequest object has a number of properties and methods that are used to transfer data. First, an instance of the XMLHttpRequest object is created and saved in the req variable.

Next, the open method initializes a request - this example is requesting data from an API, therefore is a "GET" request. The second argument for open is the URL of the API you are requesting data from. The third argument is a Boolean value where true makes it an asynchronous request.

The send method sends the request. Finally, the onload event handler parses the returned data and applies the JSON.stringify method to convert the JavaScript object into a string. This string is then inserted as the message text.


Update the code to create and send a "GET" request to the freeCodeCamp Cat Photo API. Then click the "Get Message" button. Your AJAX function will replace the "The message will go here" text with the raw JSON output from the API.
*/

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        // Add your code below this line
        req = new XMLHttpRequest();
        req.open("GET", '/json/cats.json', true);
        req.send();
        req.onload = function () {
            json = JSON.parse(req.responseText);
            document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
        };

        // Add your code above this line
    };
});



/*
JSON APIs and Ajax: Access the JSON Data from an API

In the previous challenge, you saw how to get JSON data from the freeCodeCamp Cat Photo API.

Now you'll take a closer look at the returned data to better understand the JSON format. Recall some notation in JavaScript:

[ ] -> Square brackets represent an array
{ } -> Curly brackets represent an object
" " -> Double quotes represent a string. They are also used for key names in JSON
Understanding the structure of the data that an API returns is important because it influences how you retrieve the values you need.

On the right, click the "Get Message" button to load the freeCodeCamp Cat Photo API JSON into the HTML.

The first and last character you see in the JSON data are square brackets [ ]. This means that the returned data is an array. The second character in the JSON data is a curly { bracket, which starts an object. Looking closely, you can see that there are three separate objects. The JSON data is an array of three objects, where each object contains information about a cat photo.

You learned earlier that objects contain "key-value pairs" that are separated by commas. In the Cat Photo example, the first object has "id":0 where "id" is a key and 0 is its corresponding value. Similarly, there are keys for "imageLink", "altText", and "codeNames". Each cat photo object has these same keys, but with different values.

Another interesting "key-value pair" in the first object is "codeNames":["Juggernaut","Mrs. Wallace","ButterCup"]. Here "codeNames" is the key and its value is an array of three strings. It's possible to have arrays of objects as well as a key with an array as a value.

Remember how to access data in arrays and objects. Arrays use bracket notation to access a specific index of an item. Objects use either bracket or dot notation to access the value of a given property. Here's an example that prints the "altText" of the first cat photo - note that the parsed JSON data in the editor is saved in a variable called json:

console.log(json[0].altText);
// Prints "A white cat wearing a green helmet shaped melon on its head."

For the cat with the "id" of 2, print to the console the second value in the codeNames array. You should use bracket and dot notation on the object (which is saved in the variable json) to access the value.
 */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        req = new XMLHttpRequest();
        req.open("GET", '/json/cats.json', true);
        req.send();
        req.onload = function () {
            json = JSON.parse(req.responseText);
            document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
            // Add your code below this line
            console.log(json[2].codeNames[1]);

            // Add your code above this line
        };
    };
});




/*
JSON APIs and Ajax: Convert JSON Data to HTML

Now that you're getting data from a JSON API, you can display it in the HTML.

You can use a forEach method to loop through the data since the cat photo objects are held in an array. As you get to each item, you can modify the HTML elements.

First, declare an html variable with var html = "";.

Then, loop through the JSON, adding HTML to the variable that wraps the key names in strong tags, followed by the value. When the loop is finished, you render it.

Here's the code that does this:

json.forEach(function(val) {
  var keys = Object.keys(val);
  html += "<div class = 'cat'>";
  keys.forEach(function(key) {
    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
  });
  html += "</div><br>";
});

Add a forEach method to loop over the JSON data and create the HTML elements to display it.

Here is some example JSON

[
  {
    "id":0,
      "imageLink":"https://s3.amazonaws.com/freecodecamp/funny-cat.jpg",
      "altText":"A white cat wearing a green helmet shaped melon on its head. ",
      "codeNames":[ "Juggernaut", "Mrs. Wallace", "Buttercup"
    ]
  }
]
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        req = new XMLHttpRequest();
        req.open("GET", '/json/cats.json', true);
        req.send();
        req.onload = function () {
            json = JSON.parse(req.responseText);
            var html = "";
            // Add your code below this line
            json.forEach(function (val) {
                var keys = Object.keys(val);
                html += "<div class = 'cat'>";
                keys.forEach(function (key) {
                    html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
                });
                html += "</div><br>";
            });


            // Add your code above this line
            document.getElementsByClassName('message')[0].innerHTML = html;
        };
    };
});

/*
JSON APIs and Ajax: Render Images from Data Sources

The last few challenges showed that each object in the JSON array contains an imageLink key with a value that is the URL of a cat's image.

When you're looping through these objects, you can use this imageLink property to display this image in an img element.

Here's the code that does this:

html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";


Add code to use the imageLink and altText properties in an img tag.
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        req = new XMLHttpRequest();
        req.open("GET", '/json/cats.json', true);
        req.send();
        req.onload = function () {
            json = JSON.parse(req.responseText);
            var html = "";
            json.forEach(function (val) {
                html += "<div class = 'cat'>";
                // Add your code below this line

                html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";
                // Add your code above this line
                html += "</div><br>";
            });
            document.getElementsByClassName('message')[0].innerHTML = html;
        };
    };
});


/*
JSON APIs and Ajax: Pre-filter JSON to Get the Data You Need

If you don't want to render every cat photo you get from the freeCodeCamp Cat Photo API, you can pre-filter the JSON before looping through it.

Given that the JSON data is stored in an array, you can use the filter method to filter out the cat whose "id" key has a value of 1.

Here's the code to do this:

json = json.filter(function(val) {
  return (val.id !== 1);
});

Add code to filter the json data to remove the cat with the "id" value of 1.
*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('getMessage').onclick = function () {
        req = new XMLHttpRequest();
        req.open("GET", '/json/cats.json', true);
        req.send();
        req.onload = function () {
            json = JSON.parse(req.responseText);
            var html = "";
            // Add your code below this line
            json = json.filter(function (val) {
                return (val.id !== 1);
            });

            // Add your code above this line
            json.forEach(function (val) {
                html += "<div class = 'cat'>"

                html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

                html += "</div>"
            });
            document.getElementsByClassName('message')[0].innerHTML = html;
        };
    };
});

/*
JSON APIs and Ajax: Get Geolocation Data to Find A User's GPS Coordinates

Another cool thing you can do is access your user's current location. Every browser has a built in navigator that can give you this information.

The navigator will get the user's current longitude and latitude.

You will see a prompt to allow or block this site from knowing your current location. The challenge can be completed either way, as long as the code is correct.

By selecting allow, you will see the text on the output phone change to your latitude and longitude.

Here's code that does this:

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: "+ position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
}
First, it checks if the navigator.geolocation object exists. If it does, the getCurrentPosition method on that object is called, which initiates an asynchronous request for the user's position. If the request is successful, the callback function in the method runs. This function accesses the position object's values for latitude and longitude using dot notation and updates the HTML.


Add the example code inside the script tags to check a user's current location and insert it into the HTML.
*/
// Add your code below this line
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('data').innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
    });
}