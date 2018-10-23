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