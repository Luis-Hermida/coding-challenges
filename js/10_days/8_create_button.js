// Auto increment (+1) button on click
var myButton = document.getElementById("btn");
myButton.innerHTML = "0";

myButton.addEventListener("click", () => {
  myButton.innerHTML = parseInt(myButton.innerHTML) + 1;
});

// HTML
/*
    <body>
        <button id="btn">0</button>
    </body>
 */
